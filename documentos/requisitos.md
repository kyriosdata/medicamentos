## Requisitos de usuário

- _Como indivíduo ou profissional de saúde eu desejo consultar informações sobre um medicamento para saber que tipo de documento (exigência) há para acesso ao medicamento e onde ele pode ser obtido, dentre outras_.

- _Como profissional de saúde eu desejo consultar informações sobre um medicamento pelo grupo terapêutico, para assegurar um uso adequado e buscar por alternativas para uma prescrição_.

- _Como responsável técnico eu preciso manter atualizadas as informações acessíveis pelo sistema para que elas possam ser precisas e refletir a realidade para quem as consome_.

- _Como software cliente eu preciso obter informações sobre medicamentos para que eu possa apresentá-las aos meus usuários quando requisitado._

- _Como administrador eu preciso verificar se a solução disponibilizada encontra-se em operação e fornecer dados (total de consultas, origem, horário e outros) (evidências) do uso da solução._


## Requisitos de software

1. O sistema deve oferecer busca por texto completo ou parte, tanto da denominação genérica quanto do grupo terapêutico. 
1. O sistema deve fornecer a lista de todos os medicamentos disponíveis ordenados pelo nome.
1. O sistema deve fornecer a lista dos grupos terapêuticos e dos medicamentos correspondentes. 
1. O sistema deve permitir a navegação entre os grupos terapêuticos conforme a hierarquia (“árvore”) entre eles.
1. O sistema deve fornecer a lista de referências (bibliografia) da qual parte dos dados fornecidos foram obtidos.
1. O sistema deve oferecer informações adicionais por meio de “perguntas frequentes” e as “respostas correspondentes”, ambas em texto apenas. 
1. O sistema deve permitir o uso de recurso para indicar que um medicamento ou grupo terapêutico é “favorito”.
1. O sistema deve facilitar o acesso à lista de “favoritos”.


## Análise (contexto)

O Sistema Medicamentos oferece informações para indivíduos (cidadãos),
profissionais de saúde e sistemas de software externos (por exemplo, o Conecte SUS Cidadão). As informações são mantidas
por um responsável técnico pelas informações e a operação do sistema é realizada
por um administrador.

![modelo](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/kyriosdata/medicamentos/master/UML/contexto.puml)

