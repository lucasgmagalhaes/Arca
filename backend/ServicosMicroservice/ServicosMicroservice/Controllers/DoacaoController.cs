using Domain;
using Microsoft.AspNetCore.Mvc;
using Persistence.Services;
using System;
using Transport;

namespace ServicosMicroservice.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DoacaoController : ControllerBase
    {
        public readonly IDoacaoService _doacaoService;

        public DoacaoController(IDoacaoService doacaoService)
        {
            _doacaoService = doacaoService;
        }

        [HttpPost]
        public ActionResult Doar(TDoacao doacao)
        {
            try
            {
                _doacaoService.Inserir(new Doacao()
                {
                    AssociadoId = doacao.AssociadoId,
                    Id = 0,
                    Valor = doacao.Valor
                });
                return Ok(doacao);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpGet]
        public ActionResult BuscarAdocoes()
        {
            try
            {
                return Ok(_doacaoService.Buscar());
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpGet("{id}")]
        public ActionResult BuscarAdocoesPorAssociado(long id)
        {
            try
            {
                return Ok(_doacaoService.Buscar(doacao => doacao.AssociadoId == id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}