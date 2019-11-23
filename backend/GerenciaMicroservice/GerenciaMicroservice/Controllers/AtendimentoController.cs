using Domain;
using Microsoft.AspNetCore.Mvc;
using Persistence.Services;
using System;
using System.Collections.Generic;
using System.Linq;
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
        public ActionResult<List<Atendimento>> BuscarTodos()
        {
            try
            {
                return Ok(_atendimentoService.Buscar());
            }
            catch (Exception ex)
            {
                if (ex.InnerException != null)
                {
                    return BadRequest(new { mensagem = ex.InnerException.Message });
                }
                return BadRequest(new { mensagem = ex.Message });
            }
        }

        /// <summary>
        /// Busca um atendimento pelo seu Id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public ActionResult<Atendimento> BuscarPorId(long id)
        {
            try
            {
                return Ok(_atendimentoService.Buscar(id));
            }
            catch (Exception ex)
            {
                if(ex.InnerException != null)
                {
                    return BadRequest(new { mensagem = ex.InnerException.Message });
                }
                return BadRequest(new { mensagem = ex.Message });
            }
        }

        /// <summary>
        /// Busca os atendimentos feitos por um funcionário em específico
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("Funcionario/{id}")]
        public ActionResult<List<Atendimento>> BuscarPorFuncionarioId(long id)
        {
            try
            {
                return Ok(_atendimentoService.Buscar(atendimento => atendimento.FuncionarioId == id).ToList());
            }
            catch (Exception ex)
            {
                if (ex.InnerException != null)
                {
                    return BadRequest(new { mensagem = ex.InnerException.Message });
                }
                return BadRequest(new { mensagem = ex.Message });
            }
        }

        /// <summary>
        /// Cadastra um novo atendimento
        /// </summary>
        /// <param name="atendimento"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult<Atendimento> Cadastrar(TAtendimento atendimento)
        {
            try
            {
                return Ok(_atendimentoService.Inserir(new Atendimento()
                {
                    DataAtendimento = atendimento.DataAtendimento,
                    FuncionarioId = atendimento.FuncionarioId,
                    Descricao = atendimento.Descricao,
                    Raca = atendimento.Raca,
                    TipoAtendimento = atendimento.TipoAtendimento
                }));
            }
            catch (Exception ex)
            {
                if (ex.InnerException != null)
                {
                    return BadRequest(new { mensagem = ex.InnerException.Message });
                }
                return BadRequest(new { mensagem = ex.Message });
            }
        }
    }
}