const CURRICULUM = {
  "programTitle": "RADAR — Treinamento Testador Júnior Vivo",
  "subtitle": "Fundamentos de Telecom + OpenText ALM Octane",
  "weeks": [
    { "id": 1, "title": "Fundamentos de Telecom + Base de Testes" },
    { "id": 2, "title": "Ferramentas de Teste + Octane na Prática" }
  ],
  "days": [
    {
      "id": 1,
      "week": 1,
      "title": "Como funciona uma rede de telecom",
      "goal": "Desenhar o caminho de uma chamada: celular → antena → core → destino.",
      "tasks": [
        "O que é uma operadora (Vivo/Telefônica): rede fixa, móvel, banda larga (FTTH), TV",
        "Diferença entre rede core e rede de acesso (RAN)",
        "Diferença entre voz, dados e sinalização",
        "Assistir vídeo de introdução a redes móveis"
      ],
      "practice": "Mão na massa: desenhe (no papel, no draw.io, ou na caixa de anotações abaixo) o caminho de uma ligação — celular → antena → core → destino — escrevendo 1 frase explicando o que acontece em cada etapa.",
      "video": { "title": "Entenda a diferença entre as redes 4G e 5G", "youtubeId": "Pce6CRTl09o" },
      "diagram": "network-architecture",
      "quiz": [
        { "q": "O que representa o 'core' da rede?", "options": ["A antena que capta o sinal do celular", "O cérebro da rede, que roteia e processa chamadas e dados", "O aparelho celular do usuário", "O cabo de fibra óptica"], "correct": 1, "explain": "O core é o centro de processamento e roteamento da rede — é ele que decide para onde a ligação/dados devem ir." },
        { "q": "Qual desses NÃO é um serviço típico de uma operadora como a Vivo?", "options": ["Rede móvel", "Banda larga fixa", "TV por assinatura", "Sistema operacional do celular"], "correct": 3, "explain": "Sistema operacional (Android/iOS) é do fabricante do aparelho, não da operadora." }
      ],
      "tools": []
    },
    {
      "id": 2,
      "week": 1,
      "title": "Gerações de rede móvel (2G ao 5G)",
      "goal": "Explicar em 3 frases a diferença entre 4G e 5G, e o que é VoLTE.",
      "tasks": [
        "2G (voz/SMS), 3G (dados iniciais), 4G/LTE, 5G (NSA x SA)",
        "O que é VoLTE e por que importa pra Vivo hoje",
        "O que é APN (Access Point Name)"
      ],
      "practice": "Mão na massa: sem colar de nenhum lugar, escreva com suas próprias palavras (3 a 5 frases, na caixa de anotações) a diferença entre 4G e 5G, e o que é VoLTE. Escrever do seu jeito é o que fixa o conceito de verdade.",
      "video": { "title": "Qual a diferença entre as redes 4G e 5G?", "youtubeId": "dzV6NM4rnuk" },
      "diagram": "generations",
      "quiz": [
        { "q": "O que é VoLTE?", "options": ["Um tipo de roteador Wi-Fi", "Chamada de voz feita através da rede 4G/LTE, em vez do 2G/3G", "Um protocolo de banda larga fixa", "Um aplicativo de mensagens"], "correct": 1, "explain": "VoLTE = Voice over LTE. Permite fazer ligações de voz usando a rede 4G, com melhor qualidade." },
        { "q": "O que significa APN?", "options": ["Access Point Name — configuração que conecta o celular à internet da operadora", "Antena de Ponto Nacional", "Aplicativo Padrão de Navegação", "Área de Proteção de Rede"], "correct": 0, "explain": "APN é a 'porta de entrada' configurada no celular para acessar a internet móvel da operadora." }
      ],
      "tools": []
    },
    {
      "id": 3,
      "week": 1,
      "title": "Banda larga fixa e produtos Vivo",
      "goal": "Listar os principais produtos Vivo e o fluxo de contratação de um plano.",
      "tasks": [
        "Fibra óptica (FTTH), ONT/ONU, roteador, Wi-Fi",
        "Produtos: Vivo Fibra, Vivo Total, Vivo TV, pré/pós-pago, portabilidade numérica",
        "Métricas de negócio: churn, ARPU"
      ],
      "practice": "Mão na massa: monte uma tabelinha (na caixa de anotações ou numa planilha) com os produtos Vivo — Fibra, Total, TV, Pré-pago, Pós-pago — e para cada um escreva o público-alvo e o principal benefício.",
      "video": null,
      "diagram": "ftth",
      "quiz": [
        { "q": "O que faz a ONT/ONU numa instalação de fibra?", "options": ["Converte o sinal óptico em sinal elétrico/Wi-Fi para o roteador", "Amplifica o sinal de celular", "Armazena dados na nuvem", "Gerencia a conta do cliente"], "correct": 0, "explain": "A ONT/ONU é o 'conversor' que fica na casa do cliente, transformando o sinal de fibra em algo que o roteador entende." },
        { "q": "Churn, no contexto de telecom, significa:", "options": ["Taxa de cancelamento de clientes", "Velocidade média da internet", "Quantidade de antenas instaladas", "Tipo de plano pré-pago"], "correct": 0, "explain": "Churn é a métrica que mede quantos clientes cancelam o serviço num período." }
      ],
      "tools": []
    },
    {
      "id": 4,
      "week": 1,
      "title": "Testes de software: fundamentos",
      "goal": "Escrever de memória as fases do ciclo de teste.",
      "tasks": [
        "Ciclo de vida de teste: planejamento → design → execução → defeitos → retest → fechamento",
        "Tipos de teste: funcional, regressão, integração, smoke, exploratório, aceitação (UAT)",
        "Níveis: unitário, integração, sistema, aceitação",
        "Caixa-preta x caixa-branca"
      ],
      "practice": "Mão na massa: pegue um app que você usa no dia a dia (banco, delivery, o app da Vivo) e escreva 3 testes que você faria nele, classificando cada um por tipo (funcional, regressão ou exploratório).",
      "video": null,
      "diagram": "test-cycle",
      "quiz": [
        { "q": "Teste de regressão serve para:", "options": ["Testar uma funcionalidade nova pela primeira vez", "Garantir que uma mudança não quebrou o que já funcionava antes", "Testar apenas a interface visual", "Substituir o teste de aceitação"], "correct": 1, "explain": "Regressão = reexecutar testes existentes para garantir que nada quebrou com uma mudança nova." },
        { "q": "Teste caixa-preta significa que o testador:", "options": ["Conhece todo o código internamente", "Testa sem conhecer a implementação interna, só entradas e saídas", "Só testa em ambiente escuro/noturno", "Testa apenas bugs críticos"], "correct": 1, "explain": "Caixa-preta foca no comportamento externo (o que entra e o que sai), sem olhar o código." }
      ],
      "tools": []
    },
    {
      "id": 5,
      "week": 1,
      "title": "Escrevendo casos de teste",
      "goal": "Ter 5 casos de teste escritos num arquivo/planilha.",
      "tasks": [
        "Estrutura: ID, pré-condição, passos, dado/quando/então, resultado esperado/obtido, status",
        "Técnicas: particionamento de equivalência, valor limite, tabela de decisão",
        "Exercício: 5 casos de teste para 'recarga de celular pré-pago via app'"
      ],
      "practice": "Mão na massa (o dia inteiro é prático): escreva os 5 casos de teste completos na caixa de anotações — inclua ao menos 1 caso de valor limite (ex: R$0, R$1, R$500, R$501) e 1 caso de dado inválido.",
      "video": null,
      "diagram": null,
      "quiz": [
        { "q": "Valor limite é uma técnica que testa:", "options": ["Só valores no meio do intervalo válido", "Os extremos de um intervalo (ex: 0, 1, 99, 100)", "Apenas valores negativos", "Somente strings vazias"], "correct": 1, "explain": "Análise de valor limite foca nos 'limites' de um intervalo, onde os bugs mais aparecem." }
      ],
      "tools": [
        { "name": "Google Sheets ou Excel", "note": "Para montar sua planilha de casos de teste", "url": "https://www.google.com/sheets/about/" }
      ]
    },
    {
      "id": 6,
      "week": 1,
      "title": "Defeitos, severidade e priorização",
      "goal": "Escrever 2 bug reports fictícios completos.",
      "tasks": [
        "Ciclo de vida de um bug: Novo → Em análise → Em correção → Retestado → Fechado/Reaberto",
        "Severidade (impacto técnico) x Prioridade (urgência de negócio)",
        "Como escrever um bug report bom: título, passos, esperado x obtido, evidência, ambiente"
      ],
      "practice": "Mão na massa (o dia inteiro é prático): escreva os 2 bug reports completos na caixa de anotações — um com severidade alta/prioridade baixa, outro com severidade baixa/prioridade alta. Isso mostra que você entendeu a diferença de verdade.",
      "video": null,
      "diagram": "bug-lifecycle",
      "quiz": [
        { "q": "Severidade x Prioridade: qual afirmação está correta?", "options": ["São a mesma coisa", "Severidade é o impacto técnico; prioridade é a urgência de negócio para corrigir", "Prioridade é sempre mais alta que severidade", "Só o QA define prioridade"], "correct": 1, "explain": "Um bug pode ter severidade alta (quebra o sistema) mas prioridade baixa (afeta pouca gente), e vice-versa." },
        { "q": "Um bug report bem escrito deve ter, no mínimo:", "options": ["Só um print da tela", "Passos para reproduzir, resultado esperado x obtido, e ambiente", "Apenas o nome de quem encontrou o bug", "O código-fonte completo"], "correct": 1, "explain": "Sem passos claros e o comparativo esperado x obtido, quem for corrigir não consegue reproduzir o problema." }
      ],
      "tools": []
    },
    {
      "id": 7,
      "week": 1,
      "title": "Revisão da Semana 1",
      "goal": "Autoavaliação completa antes de avançar para o Octane.",
      "tasks": [
        "Explique o caminho de uma ligação de celular até o destino",
        "Diferencie severidade e prioridade com um exemplo",
        "Escreva um caso de teste completo para 'login no app Vivo'",
        "Cite 3 produtos da Vivo e o público de cada um"
      ],
      "practice": "Mão na massa: responda as 4 tarefas acima por escrito, na caixa de anotações, sem consultar os dias anteriores. Depois compare com o que você escreveu nos Dias 1 a 6 — o que você não lembrou é o que precisa revisar antes de seguir.",
      "video": null,
      "diagram": null,
      "quiz": [
        { "q": "Depois de revisar, você diria que domina melhor:", "options": ["Conceitos de rede (telecom)", "Conceitos de teste de software", "Os dois igualmente", "Nenhum dos dois ainda"], "correct": 2, "explain": "Essa pergunta não tem resposta 'errada' — é uma autoavaliação. Se marcou 'nenhum', vale reservar mais um dia revisando antes da Semana 2." }
      ],
      "tools": []
    },
    {
      "id": 8,
      "week": 2,
      "title": "Introdução ao Octane",
      "goal": "Explicar o que é o Octane em 2 frases, como numa entrevista.",
      "tasks": [
        "Ler a documentação oficial (OpenText Software Delivery Management / ALM Octane)",
        "Entender o contexto: ferramenta moderna para times ágeis/DevOps",
        "Conceitos-chave: Workspace, Backlog, Epic → Feature → User Story, Quality Story, Test, Run, Defect, Release"
      ],
      "practice": "Mão na massa: acesse a documentação oficial do Octane e, sem copiar o texto, escreva com suas próprias palavras a diferença entre Epic, Feature e User Story.",
      "video": { "title": "ALM Octane Introduction and how to get started", "youtubeId": "OV6opBk5zO4" },
      "diagram": "octane-flow",
      "quiz": [
        { "q": "No Octane, uma 'Quality Story' está relacionada a:", "options": ["Apenas bugs de produção", "Requisitos de qualidade/teste dentro de uma User Story", "Configuração do servidor", "Relatórios financeiros"], "correct": 1, "explain": "Quality Story é o item que carrega os requisitos de teste/qualidade associados a uma história de usuário." },
        { "q": "Workspace no Octane é:", "options": ["Uma tela de configurações do usuário", "Um ambiente de trabalho dentro de um 'Space', onde ficam os dados de um projeto", "O nome do plano de assinatura", "Um tipo de defeito"], "correct": 1, "explain": "Cada Workspace guarda os dados (backlog, testes, defeitos) de um projeto específico dentro de um Space." }
      ],
      "tools": [
        { "name": "OpenText ALM Octane — docs oficiais", "note": "Documentação e getting started", "url": "https://admhelp.microfocus.com/octane/" }
      ]
    },
    {
      "id": 9,
      "week": 2,
      "title": "Módulo de Backlog e Quality",
      "goal": "Desenhar o fluxo: Epic → Feature → User Story → Quality Story → Test → Defect.",
      "tasks": [
        "Como o Octane organiza o trabalho ágil",
        "Onde entram os casos de teste manuais e automatizados",
        "Rastreabilidade: teste conectado a requisito/história de usuário"
      ],
      "practice": "Mão na massa (o dia inteiro é prático): desenhe o fluxo Epic → Feature → User Story → Quality Story → Test → Defect no draw.io e cole a explicação de cada seta na caixa de anotações.",
      "video": null,
      "diagram": "octane-flow",
      "quiz": [
        { "q": "A hierarquia correta no backlog do Octane é:", "options": ["Test → Defect → Epic", "Epic → Feature → User Story → Quality Story", "Release → Sprint → Bug", "Workspace → Space → Test"], "correct": 1, "explain": "Do maior escopo para o menor: Epic contém Features, que contêm User Stories, que se ligam a Quality Stories." }
      ],
      "tools": [
        { "name": "draw.io / diagrams.net", "note": "Para desenhar o fluxo de rastreabilidade (grátis, sem instalação)", "url": "https://app.diagrams.net" }
      ]
    },
    {
      "id": 10,
      "week": 2,
      "title": "Execução de testes no Octane",
      "goal": "Listar o passo a passo de execução de um teste manual e abertura de defeito.",
      "tasks": [
        "Conceito de Test Run: manual x automatizado",
        "Como um defeito nasce de um Run que falhou",
        "Boas práticas: status do run (passed/failed/blocked), evidências anexadas"
      ],
      "practice": "Mão na massa: escreva o passo a passo (como se estivesse fazendo de verdade) de como você executaria um teste manual no Octane e reportaria um defeito a partir de um Run que falhou.",
      "video": { "title": "ALM Octane Tutorial — backlog, releases, running tests", "youtubeId": "Ej_5DZPvxYM" },
      "diagram": null,
      "quiz": [
        { "q": "Um 'Test Run' que falha automaticamente:", "options": ["Fecha o teste sem gerar nada", "Pode gerar um defeito vinculado ao teste, com os dados já preenchidos", "Apaga o histórico de execuções anteriores", "Só pode ser corrigido pelo administrador"], "correct": 1, "explain": "O Octane pré-preenche o defeito com dados do Run que falhou, agilizando o registro do bug." },
        { "q": "Qual dessas NÃO é um status comum de Run?", "options": ["Passed", "Failed", "Blocked", "Reformatted"], "correct": 3, "explain": "'Reformatted' não existe como status de Run — os status comuns são Passed, Failed e Blocked." }
      ],
      "tools": []
    },
    {
      "id": 11,
      "week": 2,
      "title": "Pipelines, CI/CD e integração",
      "goal": "Explicar por que times ágeis conectam automação ao Octane.",
      "tasks": [
        "Octane se integra com pipelines de CI/CD (GitHub Actions, Jenkins)",
        "Diferença entre teste manual e automatizado",
        "Visão geral: resultados de automação alimentando o Octane"
      ],
      "practice": "Mão na massa: procure um pipeline de exemplo no GitHub Actions (pode ser de um repositório público seu ou de terceiros) e descreva em 3 linhas o que ele faz, na caixa de anotações.",
      "video": null,
      "diagram": null,
      "quiz": [
        { "q": "Qual a principal vantagem de conectar automação de testes ao Octane via CI/CD?", "options": ["Eliminar a necessidade de testes manuais para sempre", "Ter visibilidade rápida dos resultados de teste a cada build/deploy", "Reduzir o número de desenvolvedores", "Aumentar a severidade dos bugs automaticamente"], "correct": 1, "explain": "A integração dá visibilidade rápida — o time vê na hora se um build quebrou algo, sem esperar teste manual." }
      ],
      "tools": [
        { "name": "GitHub Actions", "note": "Você já usa Git/GitHub — dá uma olhada num pipeline simples de CI", "url": "https://docs.github.com/actions" }
      ]
    },
    {
      "id": 12,
      "week": 2,
      "title": "Dashboards, releases e métricas",
      "goal": "Listar 3 métricas de qualidade para citar numa entrevista.",
      "tasks": [
        "Milestones e Releases no Octane",
        "Dashboards: cobertura de teste, taxa de defeitos, status por sprint",
        "Métricas comuns: taxa de defeitos, cobertura executada, taxa de reabertura"
      ],
      "practice": "Mão na massa: crie uma tabela fictícia (na caixa de anotações) com 3 métricas de qualidade — nome, um valor de exemplo, e o que ela indica sobre o produto.",
      "video": null,
      "diagram": null,
      "quiz": [
        { "q": "Taxa de reabertura de bugs mede:", "options": ["Quantos bugs voltaram por terem sido corrigidos incorretamente", "Quantos bugs novos surgiram no mês", "A velocidade da rede", "O número de testers no time"], "correct": 0, "explain": "Reabertura alta é sinal de correções malfeitas ou falta de teste antes de fechar o bug." }
      ],
      "tools": []
    },
    {
      "id": 13,
      "week": 2,
      "title": "Simulado de entrevista técnica",
      "goal": "Responder as 5 perguntas em voz alta ou por escrito e revisar clareza.",
      "tasks": [
        "O que você sabe sobre a Vivo e seus produtos?",
        "Explique o ciclo de vida de um defeito",
        "O que é o Octane e para que serve?",
        "Como você priorizaria testes com prazo curto?",
        "Diferença entre teste funcional e teste de regressão?"
      ],
      "practice": "Mão na massa (o dia inteiro é prático): grave você mesmo respondendo as 5 perguntas em voz alta (celular mesmo) OU escreva as respostas completas na caixa de anotações. Depois reescute/releia e marque o que ficou confuso.",
      "video": null,
      "diagram": null,
      "quiz": [],
      "tools": []
    },
    {
      "id": 14,
      "week": 2,
      "title": "Revisão final e checklist de entrevista",
      "goal": "Sair com a 'cola' de 1 página e o currículo revisado.",
      "tasks": [
        "Revisar todos os tópicos das duas semanas",
        "Montar cola de 1 página com termos-chave",
        "Preparar 2-3 perguntas para o entrevistador",
        "Revisar currículo destacando organização e lógica"
      ],
      "practice": "Mão na massa (o dia inteiro é prático): escreva a 'cola' de 1 página inteira na caixa de anotações — é ela que você vai reler antes de entrar na entrevista.",
      "video": null,
      "diagram": null,
      "quiz": [],
      "tools": []
    }
  ]
}
;

const STORAGE_KEY = "radar_trainer_progress_v1";

function loadProgress() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      const p = JSON.parse(raw);
      if (!p.quizAnswers) p.quizAnswers = {};
      return p;
    } catch (e) { /* fallback abaixo */ }
  }
  return { completedTasks: [], dayNotes: {}, quizAnswers: {}, unlockedDays: [1], lastUpdated: null };
}

function persistProgress() {
  progress.lastUpdated = new Date().toISOString();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

let curriculum = CURRICULUM;
let progress = loadProgress();
let activeDayId = 1;

function init() {
  document.getElementById("subtitle").textContent = curriculum.subtitle;

  const firstUnfinished = curriculum.days.find(d => !isDayComplete(d));
  activeDayId = firstUnfinished ? firstUnfinished.id : curriculum.days[0].id;

  renderSidebar();
  renderDay(activeDayId);
  updateOverallBar();
}

function isTaskDone(dayId, idx) {
  return progress.completedTasks.includes(`${dayId}-${idx}`);
}

function isDayComplete(day) {
  return day.tasks.every((_, idx) => isTaskDone(day.id, idx));
}

function isDayUnlocked(dayId) {
  return progress.unlockedDays.includes(dayId);
}

function saveProgress() {
  persistProgress();
}

function updateOverallBar() {
  const totalTasks = curriculum.days.reduce((acc, d) => acc + d.tasks.length, 0);
  const done = progress.completedTasks.length;
  const pct = totalTasks === 0 ? 0 : Math.round((done / totalTasks) * 100);
  document.getElementById("overallBar").style.width = pct + "%";
  document.getElementById("overallLabel").textContent = `${pct}% concluído (${done}/${totalTasks} tarefas)`;
}

function renderSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.innerHTML = "";

  curriculum.weeks.forEach(week => {
    const label = document.createElement("div");
    label.className = "week-label";
    label.textContent = `Semana ${week.id} — ${week.title}`;
    sidebar.appendChild(label);

    curriculum.days.filter(d => d.week === week.id).forEach(day => {
      const unlocked = isDayUnlocked(day.id);
      const complete = isDayComplete(day);

      const item = document.createElement("div");
      item.className = "day-item" + (day.id === activeDayId ? " active" : "") + (!unlocked ? " locked" : "");

      const status = document.createElement("div");
      status.className = "day-status" + (complete ? " done" : "") + (!unlocked ? " locked" : "");
      status.textContent = complete ? "✓" : (!unlocked ? "🔒" : day.id);

      const textWrap = document.createElement("div");
      textWrap.className = "day-item-text";
      const title = document.createElement("div");
      title.className = "day-item-title";
      title.textContent = `Dia ${day.id}`;
      const sub = document.createElement("div");
      sub.className = "day-item-sub";
      sub.textContent = day.title;
      textWrap.appendChild(title);
      textWrap.appendChild(sub);

      item.appendChild(status);
      item.appendChild(textWrap);

      if (unlocked) {
        item.onclick = () => {
          activeDayId = day.id;
          renderSidebar();
          renderDay(day.id);
        };
      }

      sidebar.appendChild(item);
    });
  });
}

function renderDay(dayId) {
  const day = curriculum.days.find(d => d.id === dayId);
  const content = document.getElementById("content");
  content.innerHTML = "";

  const header = document.createElement("div");
  header.className = "day-header";
  header.innerHTML = `
    <div class="tag">Semana ${day.week} · Dia ${day.id} de ${curriculum.days.length}</div>
    <h2>${day.title}</h2>
  `;
  content.appendChild(header);

  const goalBox = document.createElement("div");
  goalBox.className = "goal-box";
  goalBox.innerHTML = `<b>Meta do dia:</b> ${day.goal}`;
  content.appendChild(goalBox);

  // Tarefas
  const taskTitle = document.createElement("div");
  taskTitle.className = "section-title";
  taskTitle.textContent = "Tarefas";
  content.appendChild(taskTitle);

  const list = document.createElement("ul");
  list.className = "task-list";
  day.tasks.forEach((task, idx) => {
    const li = document.createElement("li");
    const checked = isTaskDone(day.id, idx);
    li.className = "task-item" + (checked ? " checked" : "");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = checked;
    checkbox.onclick = (e) => e.stopPropagation();
    checkbox.onchange = () => toggleTask(day.id, idx);

    const span = document.createElement("span");
    span.textContent = task;

    li.appendChild(checkbox);
    li.appendChild(span);
    li.onclick = () => { checkbox.checked = !checkbox.checked; toggleTask(day.id, idx); };

    list.appendChild(li);
  });
  content.appendChild(list);

  // Mão na massa (exercício prático)
  if (day.practice) {
    const pTitle = document.createElement("div");
    pTitle.className = "section-title";
    pTitle.textContent = "🛠️ Mão na massa";
    content.appendChild(pTitle);

    const pBox = document.createElement("div");
    pBox.className = "practice-box";
    pBox.textContent = day.practice;
    content.appendChild(pBox);
  }

  // Vídeo
  if (day.video) {
    const vTitle = document.createElement("div");
    vTitle.className = "section-title";
    vTitle.textContent = "Vídeo recomendado";
    content.appendChild(vTitle);

    const vLabel = document.createElement("p");
    vLabel.style.color = "var(--text-dim)";
    vLabel.style.marginTop = "-4px";
    vLabel.textContent = day.video.title;
    content.appendChild(vLabel);

    const wrap = document.createElement("div");
    wrap.className = "video-wrap";
    wrap.innerHTML = `<iframe src="https://www.youtube.com/embed/${day.video.youtubeId}" title="${day.video.title}" allowfullscreen></iframe>`;
    content.appendChild(wrap);
  }

  // Diagrama
  if (day.diagram) {
    const dTitle = document.createElement("div");
    dTitle.className = "section-title";
    dTitle.textContent = "Diagrama de apoio";
    content.appendChild(dTitle);

    const box = document.createElement("div");
    box.className = "diagram-box";
    box.innerHTML = getDiagram(day.diagram);
    content.appendChild(box);
  }

  // Quiz de fixação
  if (day.quiz && day.quiz.length > 0) {
    const qTitle = document.createElement("div");
    qTitle.className = "section-title";
    qTitle.textContent = "🧠 Quiz de fixação";
    content.appendChild(qTitle);

    day.quiz.forEach((q, qIdx) => {
      content.appendChild(renderQuizQuestion(day.id, qIdx, q));
    });
  }

  // Ferramentas
  if (day.tools && day.tools.length > 0) {
    const tTitle = document.createElement("div");
    tTitle.className = "section-title";
    tTitle.textContent = "Ferramenta recomendada";
    content.appendChild(tTitle);

    const ul = document.createElement("ul");
    ul.className = "tools-list";
    day.tools.forEach(tool => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="${tool.url}" target="_blank" rel="noopener">${tool.name}</a><span class="tool-note">${tool.note}</span>`;
      ul.appendChild(li);
    });
    content.appendChild(ul);
  }

  // Notas
  const nTitle = document.createElement("div");
  nTitle.className = "section-title";
  nTitle.textContent = "Suas anotações";
  content.appendChild(nTitle);

  const notesBox = document.createElement("div");
  notesBox.className = "notes-box";
  const textarea = document.createElement("textarea");
  textarea.placeholder = "Escreva aqui respostas, dúvidas ou resumos do dia...";
  textarea.value = progress.dayNotes[day.id] || "";
  let debounce;
  textarea.oninput = () => {
    clearTimeout(debounce);
    debounce = setTimeout(async () => {
      progress.dayNotes[day.id] = textarea.value;
      saveProgress();
    }, 500);
  };
  notesBox.appendChild(textarea);
  content.appendChild(notesBox);

  // Ações
  const actions = document.createElement("div");
  actions.className = "actions";
  const nextDay = curriculum.days.find(d => d.id === day.id + 1);
  const btn = document.createElement("button");
  btn.className = "btn btn-primary";
  const complete = isDayComplete(day);
  btn.textContent = nextDay ? "Concluir dia e desbloquear o próximo →" : "Finalizar treinamento 🎉";
  btn.disabled = !complete;
  btn.onclick = () => {
    if (nextDay && !progress.unlockedDays.includes(nextDay.id)) {
      progress.unlockedDays.push(nextDay.id);
      saveProgress();
      activeDayId = nextDay.id;
      renderSidebar();
      renderDay(nextDay.id);
    } else if (!nextDay) {
      alert("Você completou as 2 semanas! Bora arrasar na entrevista da Vivo. 🚀");
    }
  };
  actions.appendChild(btn);

  const hint = document.createElement("span");
  hint.className = "btn-hint";
  hint.textContent = complete ? "" : "Marque todas as tarefas para liberar o próximo dia.";
  actions.appendChild(hint);

  content.appendChild(actions);
}

function renderQuizQuestion(dayId, qIdx, q) {
  const wrap = document.createElement("div");
  wrap.className = "quiz-box";

  const qText = document.createElement("div");
  qText.className = "quiz-question";
  qText.textContent = q.q;
  wrap.appendChild(qText);

  if (!progress.quizAnswers) progress.quizAnswers = {};
  const key = `${dayId}-${qIdx}`;
  const savedAnswer = progress.quizAnswers[key];

  const optionsWrap = document.createElement("div");
  optionsWrap.className = "quiz-options";

  q.options.forEach((optText, optIdx) => {
    const opt = document.createElement("div");
    opt.className = "quiz-option";
    opt.textContent = optText;

    if (savedAnswer !== undefined) {
      if (optIdx === q.correct) opt.classList.add("correct");
      else if (optIdx === savedAnswer) opt.classList.add("wrong");
    }

    opt.onclick = () => {
      if (progress.quizAnswers[key] !== undefined) return;
      progress.quizAnswers[key] = optIdx;
      saveProgress();
      renderDay(activeDayId);
    };

    optionsWrap.appendChild(opt);
  });
  wrap.appendChild(optionsWrap);

  if (savedAnswer !== undefined) {
    const explain = document.createElement("div");
    explain.className = "quiz-explain";
    explain.textContent = (savedAnswer === q.correct ? "✅ Certinho! " : "❌ Quase. ") + q.explain;
    wrap.appendChild(explain);
  }

  return wrap;
}

function toggleTask(dayId, idx) {
  const key = `${dayId}-${idx}`;
  if (progress.completedTasks.includes(key)) {
    progress.completedTasks = progress.completedTasks.filter(k => k !== key);
  } else {
    progress.completedTasks.push(key);
  }
  saveProgress();
  renderSidebar();
  renderDay(dayId);
  updateOverallBar();
}

// ---------- Diagramas SVG (gerados localmente, sem depender de imagens externas) ----------

function getDiagram(key) {
  const diagrams = {
    "network-architecture": `
      <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
        <style>
          text { font-family: Segoe UI, Arial; fill: #f2f0f7; font-size: 13px; }
          .box { fill: #2a2140; stroke: #7b2ff7; stroke-width: 2; rx: 10; }
          .arrow { stroke: #2de1c2; stroke-width: 2; marker-end: url(#arrowhead); }
        </style>
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#2de1c2" />
          </marker>
        </defs>
        <rect class="box" x="20" y="80" width="120" height="60"/>
        <text x="80" y="115" text-anchor="middle">📱 Celular</text>
        <line class="arrow" x1="140" y1="110" x2="200" y2="110"/>

        <rect class="box" x="200" y="80" width="120" height="60"/>
        <text x="260" y="108" text-anchor="middle">📡 Antena</text>
        <text x="260" y="124" text-anchor="middle" font-size="11">(RAN)</text>
        <line class="arrow" x1="320" y1="110" x2="380" y2="110"/>

        <rect class="box" x="380" y="80" width="120" height="60"/>
        <text x="440" y="108" text-anchor="middle">🧠 Core</text>
        <text x="440" y="124" text-anchor="middle" font-size="11">da rede</text>
        <line class="arrow" x1="500" y1="110" x2="560" y2="110"/>

        <rect class="box" x="560" y="80" width="120" height="60"/>
        <text x="620" y="115" text-anchor="middle">🎯 Destino</text>
      </svg>
    `,
    "generations": `
      <svg viewBox="0 0 700 160" xmlns="http://www.w3.org/2000/svg">
        <style>
          text { font-family: Segoe UI, Arial; fill: #f2f0f7; font-size: 12px; }
          .g { fill: #2a2140; stroke: #7b2ff7; stroke-width: 2; }
        </style>
        <line x1="40" y1="80" x2="660" y2="80" stroke="#322e45" stroke-width="3"/>
        <circle class="g" cx="90" cy="80" r="26"/><text x="90" y="85" text-anchor="middle">2G</text>
        <text x="90" y="130" text-anchor="middle">Voz / SMS</text>
        <circle class="g" cx="260" cy="80" r="26"/><text x="260" y="85" text-anchor="middle">3G</text>
        <text x="260" y="130" text-anchor="middle">Dados iniciais</text>
        <circle class="g" cx="430" cy="80" r="26"/><text x="430" y="85" text-anchor="middle">4G</text>
        <text x="430" y="130" text-anchor="middle">Banda larga / VoLTE</text>
        <circle class="g" cx="600" cy="80" r="26" fill="#7b2ff7"/><text x="600" y="85" text-anchor="middle">5G</text>
        <text x="600" y="130" text-anchor="middle">Baixa latência</text>
      </svg>
    `,
    "ftth": `
      <svg viewBox="0 0 700 180" xmlns="http://www.w3.org/2000/svg">
        <style>
          text { font-family: Segoe UI, Arial; fill: #f2f0f7; font-size: 13px; }
          .box { fill: #2a2140; stroke: #2de1c2; stroke-width: 2; }
        </style>
        <rect class="box" x="20" y="70" width="130" height="55" rx="10"/>
        <text x="85" y="102" text-anchor="middle">🏢 Operadora</text>
        <line x1="150" y1="97" x2="220" y2="97" stroke="#2de1c2" stroke-width="2" marker-end="url(#a2)"/>

        <rect class="box" x="220" y="70" width="130" height="55" rx="10"/>
        <text x="285" y="92" text-anchor="middle">🔌 Fibra</text>
        <text x="285" y="108" text-anchor="middle" font-size="11">óptica (FTTH)</text>
        <line x1="350" y1="97" x2="420" y2="97" stroke="#2de1c2" stroke-width="2" marker-end="url(#a2)"/>

        <rect class="box" x="420" y="70" width="110" height="55" rx="10"/>
        <text x="475" y="102" text-anchor="middle">📦 ONT/ONU</text>
        <line x1="530" y1="97" x2="580" y2="97" stroke="#2de1c2" stroke-width="2" marker-end="url(#a2)"/>

        <rect class="box" x="580" y="70" width="100" height="55" rx="10"/>
        <text x="630" y="102" text-anchor="middle">📶 Wi-Fi</text>
        <defs>
          <marker id="a2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#2de1c2" />
          </marker>
        </defs>
      </svg>
    `,
    "test-cycle": `
      <svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg">
        <style>
          text { font-family: Segoe UI, Arial; fill: #f2f0f7; font-size: 12px; }
          .c { fill: #2a2140; stroke: #7b2ff7; stroke-width: 2; }
        </style>
        <circle class="c" cx="90" cy="100" r="45"/><text x="90" y="98" text-anchor="middle">Planejar</text>
        <circle class="c" cx="230" cy="100" r="45"/><text x="230" y="98" text-anchor="middle">Design de</text><text x="230" y="112" text-anchor="middle">casos</text>
        <circle class="c" cx="370" cy="100" r="45"/><text x="370" y="98" text-anchor="middle">Executar</text>
        <circle class="c" cx="510" cy="100" r="45"/><text x="510" y="98" text-anchor="middle">Registrar</text><text x="510" y="112" text-anchor="middle">defeitos</text>
        <circle class="c" cx="650" cy="100" r="40" fill="#7b2ff7"/><text x="650" y="98" text-anchor="middle" font-size="11">Retest /</text><text x="650" y="112" text-anchor="middle" font-size="11">Fechar</text>
        <g stroke="#2de1c2" stroke-width="2" marker-end="url(#a3)">
          <line x1="135" y1="100" x2="185" y2="100"/>
          <line x1="275" y1="100" x2="325" y2="100"/>
          <line x1="415" y1="100" x2="465" y2="100"/>
          <line x1="555" y1="100" x2="610" y2="100"/>
        </g>
        <defs>
          <marker id="a3" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#2de1c2" />
          </marker>
        </defs>
      </svg>
    `,
    "bug-lifecycle": `
      <svg viewBox="0 0 700 200" xmlns="http://www.w3.org/2000/svg">
        <style>
          text { font-family: Segoe UI, Arial; fill: #f2f0f7; font-size: 12px; }
          .b { fill: #2a2140; stroke: #7b2ff7; stroke-width: 2; }
        </style>
        <rect class="b" x="20" y="75" width="110" height="50" rx="10"/><text x="75" y="105" text-anchor="middle">Novo</text>
        <rect class="b" x="170" y="75" width="120" height="50" rx="10"/><text x="230" y="105" text-anchor="middle">Em análise</text>
        <rect class="b" x="330" y="75" width="130" height="50" rx="10"/><text x="395" y="105" text-anchor="middle">Em correção</text>
        <rect class="b" x="500" y="75" width="130" height="50" rx="10"/><text x="565" y="105" text-anchor="middle">Retestado</text>
        <rect class="b" x="500" y="150" width="130" height="40" rx="10" fill="#2de1c2" stroke="none"/>
        <text x="565" y="175" text-anchor="middle" fill="#0f0e17">Fechado</text>
        <rect class="b" x="330" y="150" width="130" height="40" rx="10"/>
        <text x="395" y="175" text-anchor="middle">Reaberto ↺</text>
        <g stroke="#2de1c2" stroke-width="2" marker-end="url(#a4)">
          <line x1="130" y1="100" x2="160" y2="100"/>
          <line x1="290" y1="100" x2="320" y2="100"/>
          <line x1="460" y1="100" x2="490" y2="100"/>
          <line x1="565" y1="125" x2="565" y2="145"/>
        </g>
        <defs>
          <marker id="a4" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#2de1c2" />
          </marker>
        </defs>
      </svg>
    `,
    "octane-flow": `
      <svg viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
        <style>
          text { font-family: Segoe UI, Arial; fill: #f2f0f7; font-size: 12px; }
          .o { fill: #2a2140; stroke: #7b2ff7; stroke-width: 2; }
        </style>
        <rect class="o" x="10" y="80" width="100" height="55" rx="10"/><text x="60" y="112" text-anchor="middle">Epic</text>
        <rect class="o" x="140" y="80" width="100" height="55" rx="10"/><text x="190" y="112" text-anchor="middle">Feature</text>
        <rect class="o" x="270" y="80" width="120" height="55" rx="10"/><text x="330" y="105" text-anchor="middle">User</text><text x="330" y="119" text-anchor="middle">Story</text>
        <rect class="o" x="420" y="80" width="130" height="55" rx="10" fill="#7b2ff7"/><text x="485" y="105" text-anchor="middle">Quality</text><text x="485" y="119" text-anchor="middle">Story</text>
        <rect class="o" x="580" y="30" width="100" height="50" rx="10"/><text x="630" y="60" text-anchor="middle">Test</text>
        <rect class="o" x="580" y="140" width="100" height="50" rx="10" fill="#2de1c2" stroke="none"/><text x="630" y="170" text-anchor="middle" fill="#0f0e17">Defect</text>
        <g stroke="#2de1c2" stroke-width="2" marker-end="url(#a5)">
          <line x1="110" y1="107" x2="135" y2="107"/>
          <line x1="240" y1="107" x2="265" y2="107"/>
          <line x1="390" y1="107" x2="415" y2="107"/>
          <line x1="550" y1="95" x2="575" y2="65"/>
          <line x1="550" y1="120" x2="575" y2="155"/>
        </g>
        <defs>
          <marker id="a5" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#2de1c2" />
          </marker>
        </defs>
      </svg>
    `,
  };
  return diagrams[key] || "";
}


init();
