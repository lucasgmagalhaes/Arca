﻿using System;

namespace Transport
{
    public class TAtendimento
    {
        public long Id { get; set; }
        public DateTime Data { get; set; }
        public string Raca { get; set; }
        public string TipoAtendimento { get; set; }
        public string Descricao { get; set; }
    }
}