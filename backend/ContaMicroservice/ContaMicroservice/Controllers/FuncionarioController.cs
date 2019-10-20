using Domain;
using Microsoft.AspNetCore.Mvc;
using Persistence.Services;
using System;
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
        public IActionResult Cadastrar(TFuncionario tFuncionario)
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
        /// Atualiza um funcionário existente
        /// </summary>
        /// <param name="tFuncionario"></param>
        /// <returns></returns>
        [HttpPut]
        public IActionResult Atualizar(TFuncionario tFuncionario)
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
        public IActionResult Buscar(long id)
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
    }
}