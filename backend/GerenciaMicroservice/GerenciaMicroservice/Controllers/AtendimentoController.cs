using Domain;
using Microsoft.AspNetCore.Mvc;
using Persistence.Services;
using System;
using Transport;

namespace GerenciaMicroservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AtendimentoController : ControllerBase
    {
        public readonly IAtendimentoService _atendimentoService;

        public AtendimentoController(IAtendimentoService atendimentoService)
        {
            _atendimentoService = atendimentoService;
        }

        [HttpGet]
        public ActionResult BuscarTodos()
        {
            try
            {
                return Ok(_atendimentoService.Buscar());
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }
        }

        [HttpGet("{id}")]
        public ActionResult BuscarPorId(long id)
        {
            try
            {
                return Ok(_atendimentoService.Buscar(id));
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }
        }

        [HttpPost]
        public ActionResult Cadastrar(TAtendimento atendimento)
        {
            try
            {
                return Ok(_atendimentoService.Inserir(new Atendimento()
                {
                    DataAtendimento = atendimento.Data,
                    FuncionarioId = atendimento.FuncionarioId,
                    Descricao = atendimento.Descricao,
                    Raca = atendimento.Raca,
                    TipoAtendimento = atendimento.TipoAtendimento
                }));
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }
        }
    }
}