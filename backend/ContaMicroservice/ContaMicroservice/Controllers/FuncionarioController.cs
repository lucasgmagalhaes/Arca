using Domain;
using Microsoft.AspNetCore.Mvc;
using Persistence.Services;
using System;
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
                    return BadRequest(ex);
                }
            }
            return BadRequest("Objeto vazio");
        }

        [HttpPut]
        public IActionResult Atualizar(TFuncionario tFuncionario)
        {
            if (tFuncionario != null)
            {
                try
                {
                    _funcionarioService.Atualizar(new Funcionario()
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
                    return Ok(tFuncionario);
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
                Funcionario funcionario = _funcionarioService.Buscar(id);
                return Ok(funcionario);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}