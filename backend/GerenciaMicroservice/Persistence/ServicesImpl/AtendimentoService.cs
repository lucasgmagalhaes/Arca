using Domain;
using Persistence.Contexts;
using Persistence.Services;

namespace Persistence.ServicesImpl
{
    public class AtendimentoService : CrudService<Atendimento>, IAtendimentoService
    {
        public AtendimentoService(AppDbContext dbContext) : base(dbContext) { }
    }
}
