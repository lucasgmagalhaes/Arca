using Domain;
using Microsoft.AspNetCore.Mvc;
using Persistence.Services;
using System;
using System.Collections.Generic;
using System.Linq;
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
        /// Realiza a autenticação de um associado, fazendo a busca dele 
        /// por meio do email e da senha. Retornado o associado caso ele exista.
        /// </summary>
        /// <param name="autenticacao"></param>
        /// <returns></returns>
        [HttpPost("Autenticar")]
        public ActionResult<Associado> AutenticarAssociado(Autenticacao autenticacao)
        {
            try
            {
                if(autenticacao == null)
                {
                    return BadRequest(new { mensagem = "Login e senha não informados" });
                }

                Associado associado = _associadoService
               .Buscar(associado => associado.Email == autenticacao.Email && associado.Senha == autenticacao.Senha).FirstOrDefault();

                if (associado == null)
                {
                    return BadRequest(new { mensagem = "Email ou senha inválidos" });
                }
                return Ok(associado);
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
        /// Busca todos os associados
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult<List<Associado>> BuscarTodos()
        {
            try
            {
                return Ok(_associadoService.Buscar());
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }
        }

        /// <summary>
        /// Realiza o cadastro de um associado.
        /// Retorna o associado com o ID gerado.
        /// </summary>
        /// <param name="usuario"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult<Associado> Cadastrar(TAssociado usuario)
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
        public ActionResult<Associado> Atualizar(TAssociado usuario)
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
        public ActionResult<Associado> Buscar(long id)
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