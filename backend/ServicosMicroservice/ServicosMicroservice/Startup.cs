using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using Persistence;
using Persistence.Contexts;
using Persistence.Services;
using Persistence.ServicesImpl;
using System;
using System.IO;
using System.Reflection;

namespace ServicosMicroservice
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;

            AppDatabase.Server = configuration.GetValue<string>("ConnectionString:Server");
            AppDatabase.Database = configuration.GetValue<string>("ConnectionString:Database");
            AppDatabase.UserId = configuration.GetValue<string>("ConnectionString:UserId");
            AppDatabase.Password = configuration.GetValue<string>("ConnectionString:Password");
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddControllers();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Latest);

            ConfigureSwagger(services);
            ConfigureDependencyInjection(services);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.Use(async (ctx, next) =>
            {
                await next();
                if (ctx.Response.StatusCode == 204)
                {
                    ctx.Response.ContentLength = 0;
                }
            });

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            // N�O FA�AM ISSO EM CASA
            app.UseCors(builder =>
            builder.AllowAnyHeader()
            .AllowAnyOrigin()
            .AllowAnyMethod());

            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseAuthorization();
            app.UseSwagger();
            UpdateDatabase(app);
            ConfigureSwaggerUI(app);

            app.UseHttpsRedirection();

        }

        private void ConfigureSwaggerUI(IApplicationBuilder app)
        {
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "ServicosMicroservice");
                c.RoutePrefix = string.Empty;
            });
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }

        private void ConfigureDependencyInjection(IServiceCollection services)
        {
            services.AddScoped(typeof(ICrudService<>), typeof(CrudService<>));
            services.AddScoped(typeof(IAnimalService), typeof(AnimalService));
            services.AddScoped(typeof(IDoacaoService), typeof(DoacaoService));
            services.AddDbContext<AppDbContext>();
        }

        private void UpdateDatabase(IApplicationBuilder app)
        {
            using IServiceScope serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope();
            using AppDbContext context = serviceScope.ServiceProvider.GetService<AppDbContext>();
            //context.Database.Migrate();
        }

        private void ConfigureSwagger(IServiceCollection services)
        {
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "ServicosMicroservice",
                    Version = "v1"
                });

                string xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                string xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                c.IncludeXmlComments(xmlPath);
            });
        }
    }
}
