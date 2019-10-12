using Domain;
using Enum;
using Microsoft.AspNetCore.Mvc;
using Persistence.Services;
using System;
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

        [HttpGet]
        public ActionResult BucarTodos()
        {
            try
            {
                return Ok(_animalService.Buscar());
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpGet("{id}")]
        public ActionResult BucarTodos(long id)
        {
            try
            {
                return Ok(_animalService.Buscar(id));
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpPost]
        public ActionResult Cadastrar(TAnimal animal)
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
                return BadRequest(e);
            }
        }

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
                    Id = 0,
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
                return BadRequest(e);
            }
        }

        [HttpDelete("{id}")]
        public ActionResult Deletar(long id)
        {
            try
            {
                _animalService.Deletar(id);

                return Ok("Animal Removido");
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }
    }
}