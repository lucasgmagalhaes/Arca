using Domain;
using Microsoft.AspNetCore.Mvc;
using Persistence.Services;
using System;
using System.Collections.Generic;
using Transport;

namespace GerenciaMicroservice.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ParceiroController : ControllerBase
    {
        public readonly IParceiroService _parceiroService;

        public ParceiroController(IParceiroService parceiroService)
        {
            _parceiroService = parceiroService;
        }

        /// <summary>
        /// Busca todos os parceiros cadastrados
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult<List<Parceiro>> BuscarTodos()
        {
            try
            {
                return Ok(_parceiroService.Buscar());
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
        /// Busca um parceiro específico baseado no seu Id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public ActionResult<Parceiro> BuscarPorId(long id)
        {
            try
            {
                return Ok(_parceiroService.Buscar(id));
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
        /// Faz o cadastro de um novo parceiro
        /// </summary>
        /// <param name="parceiro"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult Cadastrar(TParceiro parceiro)
        {
            try
            {
                return Ok(_parceiroService.Inserir(new Parceiro()
                {
                    Cnpj = parceiro.Cnpj,
                    Nome = parceiro.Nome,
                    Ramo = parceiro.Ramo
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