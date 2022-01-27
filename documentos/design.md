## Design

Visando escalabilidade e o fato de que mudanças serão bem
menos frequentes que consultas, o padrão [CQRS](https://martinfowler.com/bliki/CQRS.html) orienta a arquitetura
definida abaixo. O serviço Admin fica responsável pelas
atualizações e produção dos dados que serão consultados
pelo serviço Search. Desta forma, podemos ter tantas
instâncias de Search quanto necessárias.

![modelo](http://www.plantuml.com/plantuml/proxy?cache=no&src=https://raw.githubusercontent.com/kyriosdata/medicamentos/master/UML/design.puml)

A ADMIN API demanda autenticação e
autorização, o que não necessariamente é o caso de SEARCH API, afinal, as informações fornecidas são públicas.
Por outro lado, será necessário evitar o "uso indevido"
desta API por meio de limitador de uso como [Bucket4j](https://github.com/vladimir-bukhtoyarov/bucket4j).

Uma proposta de design da interface GUI para indivíduos e profissionais de saúdes encontra-se disponível [aqui](https://xd.adobe.com/view/15d4b16b-5017-47b0-9fc9-3dc1e916f2b7-4087/?fullscreen), produzida por Bruno Marques.

A interface Admin GUI, ao contrário da anterior, é para uso
por especialistas e não demanda atenção especial.

Os componentes (serviços) Admin e Search, por outro lado,
bem como a sinalização de atualização, demandam detalhamento.

### Medicamentos Admin Service

Oferece acesso de atualização das informações técnicas acerca
dos medicamentos, locais onde estão disponíveis e outras.
Este serviço atualiza as informações que são consultadas
pelo serviço Search. Enquanto o formato das informações que são atualizadas, ou formato matriz pode ser definido conforme
os interesses da atualização, este serviço é responsável por
produzir o formato de leitura, que pode diferir do formato
matriz.

#### Dúvida (experimentar? isolar decisão?)

O uso de dois formatos aqui permite contemplar adequadamente
as operações de consulta e a escalabilidade, por exemplo,
por meio de cache disponibilizado via [MemoryDb](https://aws.amazon.com/memorydb/), por exemplo, ou similar. Também é possível disponibilizar dados em formato binário específico, carregado pelo serviço Search quando carregado ou até mesmo
gerar uma versão do serviço Search a cada atualização. Isto
tudo depende de uma noção do volume dos dados, o que não é
claro no momento.

### Medicamentos Search Service

Oferece acesso de consulta.

## Protótipos

- [Camada de dados](https://github.com/tonymfreitas/medicaments-tcc-ufg)
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
