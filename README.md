## Medicamentos

Um sistema de informação para auxiliar o acesso a medicamentos oferecidos
pela rede municipal de assistência à saúde.

## Problema

Cada município oferece gratuitamente aos cidadãos um conjunto específico de medicamentos, disponíveis em pontos geográficos distintos e em quantidades específicas.

Profissionais de saúde assim como os cidadãos, muitas vezes, desconhecem os medicamentos oferecidos, ou aqueles alternativos oferecidos, ou ainda, aqueles disponíveis apenas em casos de saúde específicos (e não em outros), enfim, as exigências para o acesso. Ainda convém destacar que não é razoável esperar que cada profissional ou cidadão saiba onde quais medicamentos são disponibilizados,
principalmente quando tais informações são atualizadas constantemente. O resultado é
a dificuldade de acesso aos medicamentos.

## Análise (contexto)

O Sistema Medicamentos oferece informações para indivíduos (cidadãos),
profissionais de saúde e sistemas de software externos (por exemplo, o Conecte SUS Cidadão). As informações são mantidas
por um responsável técnico pelas informações e a operação do sistema é realizada
por um administrador.

![modelo](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/kyriosdata/medicamentos/master/UML/contexto.puml)

## Design

Visando escalabilidade e o fato de que mudanças serão bem
menos frequentes que consultas, o padrão [CQRS](https://martinfowler.com/bliki/CQRS.html) orienta a arquitetura
definida abaixo. O serviço Admin fica responsável pelas
atualizações e produção dos dados que serão consultados
pelo serviço Search. Desta forma, podemos ter tantas
instâncias de Search quanto necessárias.

![modelo](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/kyriosdata/medicamentos/master/UML/design.puml)

## Protótipos

- [Microsserviço](https://github.com/tonymfreitas/medicaments-tcc-ufg)
- Versão inicial: [aqui](https://xd.adobe.com/view/15d4b16b-5017-47b0-9fc9-3dc1e916f2b7-4087/?fullscreen)
- PFC Bruno Marques
- Repositório Douglas (https://github.com/doug1n/drugs-consultation-frontend)
- Douglas [tcc](documentos/tcc-douglas-vieira.pdf)

# Tarefas (protótipos)

### Estratégia de atualização (update)

Produto é acompanhado de uma verso que pode se desatualizar rapidamente. Gerar uma nova versão para cada atualização não é considerado eficiente.

- Arquivo **versao.json** mantém a versão corrente.

```javascript
{
  'corrente' : '2020.01.25'
}
```

- Arquivos cujos nomes são definidos pelas versões são disponibilizados no mesmo "diretório" do arquivo **versoes.json**.
- Quando requisitada uma atualização é feito o download de **versoes.json** e a versão disponível no dispositivo é comparada com aquela mais recente registrada em **versoes.json**. Se _download_ for necessário, o nome do arquivo é montado e o mesmo recuperado, substituindo a versão disponível no dispositivo.
- O acesso ao arquivo **versoes.json** e aos arquivos contendo versões dos medicamentos deverá ser restrito (exigir credencial).
