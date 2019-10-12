using Domain;
using Persistence.Contexts;
using Persistence.Services;

namespace Persistence.ServicesImpl
{
    public class AssociadoService : CrudService<Associado>, IAssociadoService
    {
        public AssociadoService(AppDbContext dbContext) : base(dbContext) { }
    }
}
