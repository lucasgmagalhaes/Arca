﻿using Domain;
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
    public class DoacaoController : ControllerBase
    {
        public readonly IDoacaoService _doacaoService;

        public DoacaoController(IDoacaoService doacaoService)
        {
            _doacaoService = doacaoService;
        }

        [HttpPost]
        public ActionResult<Doacao> Doar(TDoacao doacao)
        {
            try
            {
                return Ok(_doacaoService.Inserir(new Doacao()
                {
                    AssociadoId = doacao.AssociadoId,
                    Id = 0,
                    Valor = doacao.Valor
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

        [HttpGet]
        public ActionResult<List<Doacao>> BuscarAdocoes()
        {
            try
            {
                return Ok(_doacaoService.Buscar());
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

        [HttpGet("Associado/{id}")]
        public ActionResult<List<Doacao>> BuscarAdocoesPorAssociado(long id)
        {
            try
            {
                return Ok(_doacaoService.Buscar(doacao => doacao.AssociadoId == id).ToList());
            }
            catch (Exception e)
            {
                if(e.InnerException != null)
                {
                    return BadRequest(new { mensagem = e.InnerException.Message });
                }
                return BadRequest(new { mensagem = e.Message });
            }
        }
    }
}