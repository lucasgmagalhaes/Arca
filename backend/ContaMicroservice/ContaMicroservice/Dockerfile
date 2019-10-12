#Depending on the operating system of the host machines(s) that will build or run the containers, the image specified in the FROM statement may need to be changed.
#For more information, please see https://aka.ms/containercompat

FROM mcr.microsoft.com/dotnet/core/aspnet:3.0-nanoserver-1809 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.0-nanoserver-1809 AS build
WORKDIR /backend
COPY ["ContaMicroservice/ContaMicroservice.csproj", "ContaMicroservice/"]
RUN dotnet restore "ContaMicroservice/ContaMicroservice.csproj"
COPY . .
WORKDIR "/backend/ContaMicroservice"
RUN dotnet build "ContaMicroservice.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ContaMicroservice.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ContaMicroservice.dll"]