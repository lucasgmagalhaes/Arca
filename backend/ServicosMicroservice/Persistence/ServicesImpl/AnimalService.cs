using Domain;
using Persistence.Contexts;
using Persistence.Services;

namespace Persistence.ServicesImpl
{
    public class AnimalService : CrudService<Animal>, IAnimalService
    {
        public AnimalService(AppDbContext dbContext) : base(dbContext) { }
    }
}
