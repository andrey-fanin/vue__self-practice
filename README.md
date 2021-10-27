Здесь будут заметки, которые пригодятся для дальнейшего понимания работы.

    JSON.stringify({}) - метод, который приводит все данные к строке.
    Если передать ему undefined, то метод ничего не выведет. (защита от потенциальных проблем)

    Для интерполяции в атрибут тега нужно использовать v-bind.
    Например: <input type="text" v-bind:placeholder='placeholderString'>
    Если ввести туда переменную, которая не объявлена, то Vue её не выведет.

    У приложения в data мы перечисляем данные (переменные) приложения, в methods - методы (функции), которые оно использует.

    Находясь в методе, нам доступен контекст. Мы можем получить его через 'this.'

    Vue, как и другие фреймворки, перерисовывает DOM-дерево только в тех местах, где оно меняется. Другие места остаются без изменений, поэтому производительность повышается.

    v-bind, v-on, v-for и проч. - директивы, вспомогательные элементы в шаблоне.  

    v-for, прописанный в html, будет работать для блока, на котором прописан, и для его дочерних элементов. 

    Метод push добавит новый элемент в массив.

    $event - спец.переменная для vue, которая отвечает за событие.

    v-if и v-else работаю в паре для блоков-соседей.
    v-else-if всегда нужно условие.

    Сокращения для директив:
    v-bind:value='inputValue' === :value='inputValue'
    v-on:click='inputChange'  === @click='inputChange'

    computed-свойства (вычисляемые) должны что-то возвращать, и они зависят от каких-то переменных в приложении.
    Они пишутся без вызова (скобочек), это геттеры и сеттеры.
    Если есть переменные внутри computed, то приложение можно оптимизировать через него.

    watch - слежка за изменениями переменных

    v-text - директива, заменяющая интерполяцию в тексте тега. Пишется как атрибут.
    v-once - тот же v-text, но запускается при создании страницы и не обновляется.
    v-pre - выводить интерполяцию как исходный текст.
    v-html - обрабатывает переменную как html-объект
    v-cloak - исчезает с элемента после того, как Vue готов. Можно использовать для подготовки внешнего вида до загрузки.
    v-show - скрывает элементы, а не удаляет. В остальном работает как v-if
    @click.prevent.stop - работает как preventDefault + удаление скрипта родителя с ребёнка, можно использовать по отдельности
    :key='elem' подойдёт для предотвращения багов приложения

    event
    .capture - событие на внутреннем элементе прежде основного
    .self - событие только для указанного элемента
    .once - событие только один раз
    .passive - для оптимизации, например - скролл

    key
    