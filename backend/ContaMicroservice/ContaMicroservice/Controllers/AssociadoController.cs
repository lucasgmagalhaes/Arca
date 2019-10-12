using Domain;
using Microsoft.AspNetCore.Mvc;
using Persistence.Services;
using System;
using Transport;

namespace ContaMicroservice.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AssociadoController : ControllerBase
    {
        private readonly IAssociadoService _associadoService;

        public AssociadoController(IAssociadoService associadoService)
        {
            _associadoService = associadoService;
        }

        [HttpPost]
        public IActionResult Cadastrar(TAssociado usuario)
        {
            if (usuario != null)
            {
                try
                {
                    Associado associado = _associadoService.Inserir(new Associado()
                    {
                        Id = 0,
                        Cpf = usuario.Cpf,
                        DataNascimento = usuario.DataNascimento,
                        Email = usuario.Email,
                        Nome = usuario.Nome,
                        Senha = usuario.Senha
                    });
                    return Ok(associado);
                }
                catch (Exception ex)
                {
                    return BadRequest(ex);
                }
            }
            return BadRequest("Objeto vazio");
        }

        [HttpPut]
        public IActionResult Atualizar(TAssociado usuario)
        {
            if (usuario != null)
            {
                try
                {
                    _associadoService.Atualizar(new Associado()
                    {
                        Id = 0,
                        Cpf = usuario.Cpf,
                        DataNascimento = usuario.DataNascimento,
                        Email = usuario.Email,
                        Nome = usuario.Nome,
                        Senha = usuario.Senha
                    });
                    return Ok(usuario);
                }
                catch (Exception ex)
                {
                    return BadRequest(ex);
                }
            }
            return BadRequest("Objeto vazio");
        }

        [HttpGet("{id}")]
        public IActionResult Buscar(long id)
        {
            try
            {
                Associado associado = _associadoService.Buscar(id);
                return Ok(associado);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}