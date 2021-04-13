const labels = [
    '1981.1', '1981.2','1982.1', '1982.2', '1983.1', '1983.2', '1984.1', '1984.2', '1985.1', '1985.2', '1986.1', '1986.2', '1987.1', '1987.2', '1988.1', '1988.2', '1989.1', '1989.2', '1990.1', '1990.2',
    '1991.1', '1991.2','1992.1', '1992.2', '1993.1', '1993.2', '1994.1', '1994.2', '1995.1', '1995.2', '1996.1', '1996.2', '1997.1', '1997.2', '1998.1', '1998.2', '1999.1', '1999.2', '2000.1', '2000.2',
    '2001.1', '2001.2','2002.1', '2002.2', '2003.1', '2003.2', '2004.1', '2004.2', '2005.1', '2005.2', '2006.1', '2006.2', '2007.1', '2007.2', '2008.1', '2008.2', '2009.1', '2009.2', '2010.1', '2010.2',
    '2011.1', '2011.2','2012.1', '2012.2', '2013.1', '2013.2', '2014.1', '2014.2', '2015.1', '2015.2', '2016.1', '2016.2', '2017.1', '2017.2', '2018.1', '2018.2', '2019.1', '2019.2'
];

const prediction = [
    {"cra_medio":7.66,"periodo_conclusao":"2019.2","qtd_egressos":50},
    {"cra_medio":6.36,"periodo_conclusao":"2020.1","qtd_egressos":54},
    {"cra_medio":6.83,"periodo_conclusao":"2020.2","qtd_egressos":55},
    {"cra_medio":5.8,"periodo_conclusao":"2021.1","qtd_egressos":56},
    {"cra_medio":6.05,"periodo_conclusao":"2021.2","qtd_egressos":66},
    {"cra_medio":6.36,"periodo_conclusao":"2022.1","qtd_egressos":74},
    {"cra_medio":5.74,"periodo_conclusao":"2022.2","qtd_egressos":82},
    {"cra_medio":6.05,"periodo_conclusao":"2023.1","qtd_egressos":86},
    {"cra_medio":6.36,"periodo_conclusao":"2023.2","qtd_egressos":84},
    {"cra_medio":5.74,"periodo_conclusao":"2024.1","qtd_egressos":82},
]

// Mapeamento das chaves de acesso ao json para os valores traduzidos que serão exibidos nas
// legendas do gráfico.
const subtitles_translations = {
    // "Período de graduação": "graduationTerm",
    "alumniCount": "Número de egressos",
    "averageGpa": "CRA médio",
    "averageTerms": "Média de períodos",
    "averageCost": "Tempo médio"
}

const select_items = [
    {
        "label": "Número de egressos",
        "value": "alumniCount",
        "role": "Master"
    },
    {
        "label": "CRA médio",
        "value": "averageGpa",
        "role": "Master"
    },
    {
        "label": "Média de períodos",
        "value": "averageTerms",
        "role": "Master"
    },
    {
        "label": "Tempo médio",
        "value": "averageCost",
        "role": "Master"
    }
]

export { labels, prediction, subtitles_translations, select_items };