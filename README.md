# Documentação: Uso do Módulo @react-native-community/datetimepicker (Android)

## Explicação Detalhada

### O que faz o `mode` no DateTimePicker?

O `mode` define o tipo de seletor exibido para o usuário. No Android, ele pode assumir os seguintes valores:

- **`date`**: Exibe um seletor para escolher apenas a data (dia, mês e ano).

  **Exemplo de uso**:
  ```jsx
  <DateTimePicker 
    value={date} 
    mode="date" 
    display="calendar" 
  />
Este exemplo exibe um calendário interativo para o usuário selecionar a data.

time: Exibe um seletor para escolher apenas o horário (hora e minutos).

Exemplo de uso:
```jsx
<DateTimePicker 
  value={time} 
  mode="time" 
  display="clock" 
/>
```

Neste caso, será exibido um relógio interativo para o usuário selecionar o horário.

### O que faz o display no DateTimePicker?
O display define a aparência visual do seletor no Android. Os valores disponíveis são:

default: Usa o estilo padrão do sistema operacional.

Exemplo de uso:
```jsx
<DateTimePicker 
  value={date} 
  mode="date" 
  display="default" 
/>
```
Aqui, o estilo padrão do sistema será usado.

spinner: Exibe um seletor com formato de rolagem.

Exemplo de uso:

```jsx
<DateTimePicker 
  value={time} 
  mode="time" 
  display="spinner" 
/>
```
Este exemplo mostrará um seletor de rolagem para o usuário selecionar o horário.

calendar: Exibe um calendário interativo (somente para mode="date").

Exemplo de uso:

```jsx
<DateTimePicker 
  value={date} 
  mode="date" 
  display="calendar" 
/>
```
Um calendário interativo será exibido para o usuário selecionar uma data.

clock: Exibe um relógio interativo (somente para mode="time").

Exemplo de uso:
```jsx
<DateTimePicker 
  value={time} 
  mode="time" 
  display="clock" 
/>
```
Um relógio interativo será mostrado para o usuário escolher o horário.

### Estilização do DateTimePicker
Como o DateTimePicker é renderizado como um componente nativo no Android, sua estilização direta é limitada. No entanto, é possível personalizar sua aparência usando as seguintes técnicas:

1. Envolver dentro de um View estilizado

Esta abordagem permite personalizar o contêiner em torno do DateTimePicker:

```jsx
<View 
  style={{
    backgroundColor: 'white', 
    borderRadius: 10, 
    padding: 10
  }}
>
  <DateTimePicker 
    value={date} 
    mode="date" 
    display="calendar" 
  />
</View>
```

Neste exemplo, o DateTimePicker será exibido dentro de um contêiner com fundo branco, bordas arredondadas e preenchimento interno.

2. Estilizar o botão de ativação

Para melhorar a aparência do botão que abre o seletor de data/hora:
```jsx
<TouchableOpacity 
  style={{
    backgroundColor: '#4CAF50', 
    padding: 10, 
    borderRadius: 5
  }} 
  onPress={showDatePicker}
>
  <Text 
    style={{
      color: 'white', 
      textAlign: 'center'
    }}
  >
    Selecionar Data
  </Text>
</TouchableOpacity>
```
Este exemplo cria um botão verde com texto branco centralizado. Quando clicado, ele ativa o seletor de data/hora.

### Conclusão
Com o uso correto das propriedades mode e display, é possível controlar como o DateTimePicker se comporta e aparece no Android. Além disso, usando técnicas de estilização, você pode ajustá-lo à identidade visual do seu aplicativo, mesmo com as limitações de componentes nativos.

Se necessário, continue explorando personalizações e ajustes para atender às suas necessidades específicas.
