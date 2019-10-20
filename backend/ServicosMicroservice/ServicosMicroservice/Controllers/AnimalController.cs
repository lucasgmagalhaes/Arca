using Domain;
using Enum;
using Microsoft.AspNetCore.Mvc;
using Persistence.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using Transport;

namespace ServicosMicroservice.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AnimalController : ControllerBase
    {
        private readonly IAnimalService _animalService;

        public AnimalController(IAnimalService animalService)
        {
            _animalService = animalService;
        }

        /// <summary>
        /// Busca todos os animais cadastrados
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult<List<Animal>> BucarTodos()
        {
            try
            {
                return Ok(_animalService.Buscar());
            }
            catch (Exception e)
            {
                if (e.InnerException != null)
                {
                    return BadRequest(new { mensagem = e.InnerException.Message });
                }
                return BadRequest(new { mensagem = e.Message });
            }
        }

        /// <summary>
        /// Busca um animal específico pelo seu id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public ActionResult<Animal> BucarTodos(long id)
        {
            try
            {
                return Ok(_animalService.Buscar(id));
            }
            catch (Exception e)
            {
                if (e.InnerException != null)
                {
                    return BadRequest(new { mensagem = e.InnerException.Message });
                }
                return BadRequest(new { mensagem = e.Message });
            }
        }

        /// <summary>
        /// Busca todos os animais pelo Id do adotante
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("Adotante/{id}")]
        public ActionResult<List<Animal>> BuscarPorAdotanteId(long id)
        {
            try
            {
                return Ok(_animalService.Buscar(animal => animal.AdotanteId == id).ToList());
            }
            catch (Exception e)
            {
                if (e.InnerException != null)
                {
                    return BadRequest(new { mensagem = e.InnerException.Message });
                }
                return BadRequest(new { mensagem = e.Message });
            }
        }

        /// <summary>
        /// Cadastra um novo animal
        /// </summary>
        /// <param name="animal"></param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult<Animal> Cadastrar(TAnimal animal)
        {
            try
            {
                return Ok(_animalService.Inserir(new Animal()
                {
                    AdotanteId = animal.AdotanteId,
                    Descricao = animal.Descricao,
                    Especie = animal.Especie,
                    Id = 0,
                    Idade = animal.Idade,
                    IsDisponivelParaAdocao = animal.IsDisponivelParaAdocao,
                    IsMorto = animal.IsMorto,
                    MedicaoIdade = animal.MedicaoIdade,
                    Nome = animal.Nome,
                    Raca = animal.Raca
                }));
            }
            catch (Exception e)
            {
                if (e.InnerException != null)
                {
                    return BadRequest(new { mensagem = e.InnerException.Message });
                }
                return BadRequest(new { mensagem = e.Message });
            }
        }

        /// <summary>
        /// Atualiza as informações de um animal existente
        /// </summary>
        /// <param name="animal"></param>
        /// <returns></returns>
        [HttpPut]
        public ActionResult Atualizar(TAnimal animal)
        {
            try
            {
                _animalService.Atualizar(new Animal()
                {
                    AdotanteId = animal.AdotanteId,
                    Descricao = animal.Descricao,
                    Especie = animal.Especie,
                    Id = animal.Id,
                    Idade = animal.Idade,
                    IsDisponivelParaAdocao = animal.IsDisponivelParaAdocao,
                    IsMorto = animal.IsMorto,
                    MedicaoIdade = animal.MedicaoIdade,
                    Nome = animal.Nome,
                    Raca = animal.Raca
                });

                return Ok(animal);
            }
            catch (Exception e)
            {
                if (e.InnerException != null)
                {
                    return BadRequest(new { mensagem = e.InnerException.Message });
                }
                return BadRequest(new { mensagem = e.Message });
            }
        }

        /// <summary>
        /// Remove um animal pelo seu Id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public ActionResult Deletar(long id)
        {
            try
            {
                _animalService.Deletar(id);
                return Ok(new { mensagem = "Animal Removido" });
            }
            catch (Exception e)
            {
                if (e.InnerException != null)
                {
                    return BadRequest(new { mensagem = e.InnerException.Message });
                }
                return BadRequest(new { mensagem = e.Message });
            }
        }
    }
}