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

        /// <summary>
        /// Busca todos os atendimentos cadastrados
        /// </summary>
        /// <returns></returns>
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

        /// <summary>
        /// Busca um atendimento pelo seu Id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
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

        /// <summary>
        /// Cadastra um novo atendimento
        /// </summary>
        /// <param name="atendimento"></param>
        /// <returns></returns>
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