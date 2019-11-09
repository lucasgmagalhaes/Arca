using Domain;
using Microsoft.AspNetCore.Mvc;
using Persistence.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using Transport;

namespace ContaMicroservice.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FuncionarioController : ControllerBase
    {
        private readonly IFuncionarioService _funcionarioService;

        public FuncionarioController(IFuncionarioService funcionarioService)
        {
            _funcionarioService = funcionarioService;
        }

        /// <summary>
        /// Cadastra um novo funcionário
        /// </summary>
        /// <example>
        /// Financeiro = 0
        /// Administrativo = 1
        /// Recepção = 2
        /// </example>
        /// <param name="tFuncionario"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult<Funcionario> Cadastrar(TFuncionario tFuncionario)
        {
            if (tFuncionario != null)
            {
                try
                {
                    Funcionario funcionario = _funcionarioService.Inserir(new Funcionario()
                    {
                        Id = 0,
                        Cpf = tFuncionario.Cpf,
                        DataNascimento = tFuncionario.DataNascimento,
                        Email = tFuncionario.Email,
                        Nome = tFuncionario.Nome,
                        Senha = tFuncionario.Senha,
                        IsAdministrador = tFuncionario.IsAdministrador,
                        Salario = tFuncionario.Salario,
                        Setor = tFuncionario.Setor
                    });
                    return Ok(funcionario);
                }
                catch (Exception ex)
                {
                    return BadRequest(new { mensagem = ex.Message });
                }
            }
            return BadRequest("Objeto vazio");
        }

        /// <summary>
        /// Realiza a autenticação de um funcionário, fazendo a busca dele 
        /// por meio do email e da senha. Retornado o associado caso ele exista.
        /// </summary>
        /// <param name="autenticacao"></param>
        /// <returns></returns>
        [HttpPost("Autenticar")]
        public ActionResult<Funcionario> AutenticarFuncionario(Autenticacao autenticacao)
        {
            try
            {
                if (autenticacao == null)
                {
                    return BadRequest(new { mensagem = "Cpf e senha não informados" });
                }

                Funcionario associado = _funcionarioService
               .Buscar(associado => associado.Cpf == autenticacao.Cpf && associado.Senha == autenticacao.Senha).FirstOrDefault();

                if (associado == null)
                {
                    return BadRequest(new { mensagem = "Cpf ou senha inválidos" });
                }
                return Ok(associado);
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
        /// Atualiza um funcionário existente
        /// </summary>
        /// <param name="tFuncionario"></param>
        /// <returns></returns>
        [HttpPut]
        public ActionResult<Funcionario> Atualizar(TFuncionario tFuncionario)
        {
            if (tFuncionario != null)
            {
                try
                {
                    _funcionarioService.Atualizar(new Funcionario()
                    {
                        Id = tFuncionario.Id,
                        Cpf = tFuncionario.Cpf,
                        DataNascimento = tFuncionario.DataNascimento,
                        Email = tFuncionario.Email,
                        Nome = tFuncionario.Nome,
                        Senha = tFuncionario.Senha,
                        IsAdministrador = tFuncionario.IsAdministrador,
                        Salario = tFuncionario.Salario,
                        Setor = tFuncionario.Setor
                    });
                    return Ok(tFuncionario);
                }
                catch (Exception ex)
                {
                    return BadRequest(new { mensagem = ex.Message });
                }
            }
            return BadRequest("Objeto vazio");
        }

        /// <summary>
        /// Busca um associado baseado no id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public ActionResult<Funcionario> Buscar(long id)
        {
            try
            {
                Funcionario funcionario = _funcionarioService.Buscar(id);
                return Ok(funcionario);
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }
        }

        /// <summary>
        /// Busca todos os funcionarios
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult<List<Funcionario>> BuscarTodos()
        {
            try
            {
                return Ok(_funcionarioService.Buscar());
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = ex.Message });
            }
        }
    }
}