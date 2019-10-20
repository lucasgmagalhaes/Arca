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

        /// <summary>
        /// Realiza o cadastro de um associado.
        /// Retorna o associado com o ID gerado.
        /// </summary>
        /// <param name="usuario"></param>
        /// <returns></returns>
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
                    return BadRequest(new { mensagem = ex.Message });
                }
            }
            return BadRequest("Objeto vazio");
        }

        /// <summary>
        /// Atualiza um associado cadastrado
        /// </summary>
        /// <param name="usuario"></param>
        /// <returns></returns>
        [HttpPut]
        public IActionResult Atualizar(TAssociado usuario)
        {
            if (usuario != null)
            {
                try
                {
                    _associadoService.Atualizar(new Associado()
                    {
                        Id = usuario.Id,
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
                    return BadRequest(new { mensagem = ex.Message });
                }
            }
            return BadRequest("Objeto vazio");
        }

        /// <summary>
        /// Faz a busca de um associado baseado no ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
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
                return BadRequest(new { mensagem = ex.Message });
            }
        }
    }
}