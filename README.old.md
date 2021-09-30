# Компоненты и коллекции

SPA(one html) & MPA (many html)
Node.js + React + Webpack + Babel

## инициализация реакт-приложения

### в текущей папке, поэтому ставим точку

`npx create-react-app .`

### с созданием новой папки, тогда вместо точки пишем имя папки

`npx create-react-app my-app`

## установка тулзов для реакта

`https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ru`
проходим по ссылке и устанавливаем себе в браузер это расширение

## Элементы реакт - прошлый век

Создание элемента - это как в Js, создание узла (будущего тега) с указанием его и мени и свойств (будущих атрибутов)

React.createElement(
1 аргумент - "имя тега",
2 аргумент - {
атрибут: "значение",
...,
атрибут: "значение" }, или null
3 аргумент - "значение в теге" или вложенные теги
)

## Отрисовка элемента в браузере - прошлый век

Аналогично методу в Js: insertAdjacentElement(куда, что),
только тут аргументы наоборот расположены
ReactDOM.render(что рендерить, куда рендерить)

## теперь JSX(JavaScript Syntax Extension)

аналог строчной разметки в Js, только имена атрибутов иногда отличаются, например вместо class пишем className

```
const btn = (<button className="myBtn" type="button" id="btn-classic">load more</button>)
```

## подстановка значений атрибутов

```
import s from './file.module.css'

const btn = (<button className={s.myBtn} type="button" id="btn-classic">load more</button>)
```

## ПРАВИЛО ОБЩЕГО РОДИТЕЛЯ

если надо в одну переменную вписать 2 и более элементов, всех их нужно обернуть в общий тег обертку (div, nav, section, article) по смыслу или, если такая обертка не нужна, то использовать тег-фрагмент

старый вид

```
import React, { Fragment } from 'react'
<Fragment>
    <h2>Title</h2>
    <p>Lorem ipsum dolor sir amet...</p>
</Fragment>
```

новый вид

```
<>
    <h2>Title</h2>
    <p>Lorem ipsum dolor sir amet...</p>
</>
```

## И, Ура! КОМПОНЕНТЫ

!!!ВСЕ КОМПОНЕНТЫ ИМЕНУМ С БОЛЬШОЙ БУКВЫ!!!
они бывают глупые(функциональные) и умные(классовые - модуль 2)

Компонент - это переиспользуемый шаблон разметки.
Он может получать разные данные, но обрабатывать и рендерить будет их по прописанной в нем логике. - Вспоминаем шаблонизатор Handlebars и функции обработки данных перед вызовов шалонизатора.

### PROPS - набор свойств компонента, через них можно передавать от родителя ребенку значения, массивы и объекты данных, методы (функции), аже другие компоненты.

this.props - абстрактный объект, доступный каждому компоненту, через него текущий компонент может получить данные от родительского компонента, например массив товаров для отрисовки карточек товара
Как фасовочная машина - пришло сырье, расфасовали его по пакетам, пришло другое сырье, по условию расфасовали по коробкам и передали на склад (отрендерили).
1 проп - это 1 свойство объекта this.props

#### имя пропа при передаче в родителе должно совпадать с именем этого пропа при получении в ребенке

Для передачи других компонентов есть проп children - это его зарезервированное имя.
Если компонент при объявлении (создании) получаем и рендерит children, то при его вызове (использовании), такой компонент будет парный (открывающий и закрывающий), а внутри можно располагать другие компоненты или просто разметку JSX.

в функциональном компоненте this.props получаем в скобках параметров, можем сразу деструктуризировать пропсы внутри этих скобок

## defaultProps

раз уж мы через "параметры" функции-компонента получаем пропы-значения, то мы рискуем их когда-то не получить, значит может использовать аналог дефолтных параметров JS - defaultProps

defaultProps - это свойство любого компонента, доступное ему через прототипы (помним, что функция - это тоже объект, функциональный компонент не исключение)
Обращаемся к компоненту после его объявления, с большой же ж буквы (с уважением) и через точку к его свойству defaultProps и = {}
внутри {} перечисляем полученные пропы и значения, кторые им надо применить, если мы такой проп не получили.

## propTypes

ну и наконец проверка типов данных - помним же, что Js слаботипизированный язык, еще называется с динамической типизацией, так вот:
раньше в пакет react был вшит пакет prop-types, с приходом TypeScript потребность в prop-types поубавилось, тому его и вынесли в отдельный пакет, который надо устанавливать через npm
`npm i prop-types`
после установки этого пакета, надо его заимпортировать в компонент, где ходим проверять типы получаемых пропов
`import PropTypes from 'prop-types'`
теперь в текущем компоненте доступно свойство propTypes (да, я не ошиблась, свойство с маленькой буквы, а обращение к пакету с Большой)
Обращаемся к компоненту после его объявления, с большой же ж буквы (с уважением) и через точку к его свойству propTypes и = {}
внутри {} перечисляем полученные пропы и в значении указываем ожидаемый тип данных, обращаясь к библиотеке PropTypes.

Пример:

```
MyComponent.propTypes = {
    prop1: PropTypes.string,
    prop2: PropTypes.number,
}
```

Исчерпывающий список примеров проверки типов есть в доках к библиотеке:
https://ru.reactjs.org/docs/typechecking-with-proptypes.html

## Условный рендер

Это когда не всегда и не сразу нужно отрисовывать в браузере разметку, прописанную в компоненте
условный рендер всегда заключает условие и его разметку в {}
внутри {} мы указываем сначала условие потом логический оператор, потом разметку

### if

{ condition && (JSX) }

### if...else - ternary operator

{ condition ? (JSX, если true) : (JSX, если false) }

## РАБОТА С МАССИВАМИ

это всегда перебор - map
и, понятное дело, такая операция происходит внутри {}

### проп key

Перебор массива влечет за собой создание и рендер подобных элементов, тут реакту надо помогать отличать эти схожие новые элементы, в каждый элемент нужно указывать проп key, а значением ему генерить идентификатор, например через какую-то библиотеку генерации id (generateId, uuid, etc) или передавать из полученной коллекции айдишник, ну если есть конечно.

# LESSON 2

## INLINE - инлайн-стили - это когда через атрибут style

значит надо создать объект со стилями ({prop: value;}) и передать его как значение атрибута style в элемент

!!! ВАЖНО !!! помните, что инлайн-стили - это хард код, используйте его с умом. Помним про приоритет селекторов и стилей
самый высокий - ничем не перебьется - !important
высокий (1000) - INLINE (через атрибут style)
средний - встроенные стили - через тег style
селекторы:
1 - id
2 - class
3 - tag

## Vanilla CSS / SCSS - в подключаемом файле (переменные, миксины) - глобальная видимость стилей

использовать: `className="selector"`

## CSS-modules - подключаемые файлы [name].module.css/scss через переменную (s || styles || classes)

локальная область видимости селекторов, !!! но только классов
использовать: `className={s.selector}`

### module COMPOSES for CSS || @extends for SCSS

```
.flex-rw {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
}

.mySelector {
    composes: flex-rw;

    background: wheat;
}
```

### module VARIABLES - в отдельном файле

@value blue-color: blue;
подключаем как:

```
@value blue-color from './vars.module.css'
```

используем:

```
.mySelector {
    background: blue-color;
}
```

### GLOBAL in module

```
:global(.mySelector) {
  color: blue;
}
```

## Bootstrap

npm i bootstrap react-bootstrap

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'

## styled-components

npm i styled-components

import styled from "styled-components";
использовать:

```
const Styles = styled.div`
.selector1 {}
.selector2 {}`
```

## Импорт и использование изображений и свг-спрайтов

Оптимально для использования SVG иконок в React создать новый компонент.

Файл спрайта сформировать и положить в папку с изображениями

В папке components создать компонент Icons

```
// file Icons.js

import svg from './sprite.svg'

export function Icons({ name, className, color, stroke, width, height }) {
  return (
    <svg
      className={`icon icon-${name} ${className}`}
      fill={color}
      stroke={stroke}
      width={width}
      height={height}
    >
      <use xlinkHref={`${svg}#${name}`}></use>
    </svg>
  )
}
```

Заимпортировать компонент Icons в другой компонент, где нужно отразить иконки и встроить компонент Icons, передав ему необходимые props

```
// file of your component

import { Icons } from '...../Icons'

export function myComponent() {
  return (
    <div className="footer__social-media">
      <a href="/twitter" aria-label="CSTonTwitter">
        <Icons name="twitter-icon" color="white" />
      </a>
      <a href="/facebook" aria-label="CSTonFacebook">
        <Icons name="facebook-icon" color="white" />
      </a>
      <a href="/instagram" aria-label="CSTonInstagram">
        <Icons name="instagram-icon" color="white" />
      </a>
      <a href="/youtube" aria-label="CSTonTwitter">
        <Icons name="youtube-icon" color="white" />
      </a>
      <a href="/dribbble" aria-label="CSTonDribbble">
        <Icons name="dribbble-icon" color="white" />
      </a>
      <a href="/github" aria-label="CSTonGithub">
        <Icons name="github-icon" color="white" />
      </a>
    </div>
  )
}
```
