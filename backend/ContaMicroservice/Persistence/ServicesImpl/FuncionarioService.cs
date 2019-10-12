using Domain;
using Persistence.Contexts;
using Persistence.Services;

namespace Persistence.ServicesImpl
{
    public class FuncionarioService : CrudService<Funcionario>, IFuncionarioService
    {
        public FuncionarioService(AppDbContext dbContext) : base(dbContext) { }
    }
}
