# medicamentos
Base de medicamentos disponíveis na rede pública municipal de Goiânia (GO).

# Tarefas (protótipos)

### Estratégia de atualização (update)
Produto é acompanhado de uma verso que pode se desatualizar rapidamente. Gerar uma nova versão para cada atualização não é considerado eficiente. 

- Arquivo **versoes.json** contém versões produzidas ao longo do tempo. 
- Arquivos cujos nomes são definidos pelas versões são disponibilizados no mesmo "diretório" do arquivo **versoes.json**.
- Quando requisitada uma atualização é feito o download de **versoes.json** e a versão disponível no dispositivo é comparada com aquela mais recente registrada em **versoes.json**. Se _download_ for necessário, o nome do arquivo é montado e o mesmo recuperado, substituindo a versão disponível no dispositivo. 
- O acesso ao arquivo **versoes.json** e aos arquivos contendo versões dos medicamentos deverá ser restrito (exigir credencial).

