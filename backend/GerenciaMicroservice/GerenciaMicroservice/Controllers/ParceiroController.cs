using Domain;
using Microsoft.AspNetCore.Mvc;
using Persistence.Services;
using System;
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

        [HttpGet]
        public ActionResult BuscarTodos()
        {
            try
            {
                return Ok(_parceiroService.Buscar());
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpGet("{id}")]
        public ActionResult BuscarPorId(long id)
        {
            try
            {
                return Ok(_parceiroService.Buscar(id));
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

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
                return BadRequest(ex);
            }
        }
    }
}