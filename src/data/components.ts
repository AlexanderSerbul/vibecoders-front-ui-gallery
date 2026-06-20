export type ComponentLink = {
  to: string
  label: string
}

export type ComponentGroup = {
  label: string
  description: string
  items: ComponentLink[]
}

// Single source of truth for component navigation — used by both the Navbar
// (category dropdowns) and the Home landing (group cards).
export const componentGroups: ComponentGroup[] = [
  {
    label: "Оверлеи",
    description: "Поверх страницы: диалоги, панели и уведомления.",
    items: [
      { to: "/components/dialog", label: "Dialog" },
      { to: "/components/alert-dialog", label: "Alert Dialog" },
      { to: "/components/sheet", label: "Sheet" },
      { to: "/components/drawer", label: "Drawer" },
      { to: "/components/toast", label: "Toast" },
    ],
  },
  {
    label: "Плавающие",
    description: "Всплывают рядом с элементом — по наведению или клику.",
    items: [
      { to: "/components/popover", label: "Popover" },
      { to: "/components/tooltip", label: "Tooltip" },
      { to: "/components/hover-card", label: "Hover Card" },
    ],
  },
  {
    label: "Меню",
    description:
      "Списки команд и действий: выпадающее меню, строка меню, контекст и палитра.",
    items: [
      { to: "/components/dropdown-menu", label: "Dropdown Menu" },
      { to: "/components/navigation-menu", label: "Navigation Menu" },
      { to: "/components/menubar", label: "Menubar" },
      { to: "/components/context-menu", label: "Context Menu" },
      { to: "/components/command", label: "Command" },
    ],
  },
  {
    label: "Контент",
    description: "Организация контента: секции, сворачиваемые блоки и вкладки.",
    items: [
      { to: "/components/accordion", label: "Accordion" },
      { to: "/components/collapsible", label: "Collapsible" },
      { to: "/components/tabs", label: "Tabs" },
      { to: "/components/sortable-tabs", label: "Sortable Tabs" },
      { to: "/components/resizable", label: "Resizable" },
      { to: "/components/scroll-area", label: "Scroll Area" },
      { to: "/components/aspect-ratio", label: "Aspect Ratio" },
      { to: "/components/carousel", label: "Carousel" },
      { to: "/components/sidebar", label: "Sidebar" },
    ],
  },
  {
    label: "Таблицы",
    description: "Отображение данных в таблицах: сортировка, фильтр, пагинация.",
    items: [{ to: "/components/data-table", label: "Data Table" }],
  },
  {
    label: "Графики",
    description: "Визуализация данных диаграммами (на Recharts).",
    items: [{ to: "/components/chart", label: "Chart" }],
  },
  {
    label: "Выбор",
    description: "Выбрать один вариант из нескольких.",
    items: [
      { to: "/components/select", label: "Select" },
      { to: "/components/combobox", label: "Combobox" },
      { to: "/components/radio-group", label: "Radio Group" },
    ],
  },
  {
    label: "Переключатели",
    description: "Состояния «вкл/выкл»: тумблеры, флажки, кнопки-режимы.",
    items: [
      { to: "/components/switch", label: "Switch" },
      { to: "/components/checkbox", label: "Checkbox" },
      { to: "/components/toggle", label: "Toggle" },
      { to: "/components/toggle-group", label: "Toggle Group" },
    ],
  },
  {
    label: "Контролы",
    description: "Ввод текста и чисел, формы с валидацией.",
    items: [
      { to: "/components/slider", label: "Slider" },
      { to: "/components/form", label: "Form" },
      { to: "/components/input-otp", label: "Input OTP" },
      { to: "/components/textarea", label: "Textarea" },
    ],
  },
  {
    label: "Дата",
    description: "Календарь и выбор даты.",
    items: [
      { to: "/components/calendar", label: "Calendar" },
      { to: "/components/date-picker", label: "Date Picker" },
    ],
  },
  {
    label: "Элементы",
    description: "Небольшие UI-элементы: аватары, прогресс, плашки и навигация.",
    items: [
      { to: "/components/avatar", label: "Avatar" },
      { to: "/components/badge", label: "Badge" },
      { to: "/components/skeleton", label: "Skeleton" },
      { to: "/components/progress", label: "Progress" },
      { to: "/components/alert", label: "Alert" },
      { to: "/components/pagination", label: "Pagination" },
      { to: "/components/breadcrumb", label: "Breadcrumb" },
    ],
  },
  {
    label: "Базовые",
    description: "Кирпичики, из которых собрано всё остальное.",
    items: [
      { to: "/components/button", label: "Button" },
      { to: "/components/input", label: "Input" },
      { to: "/components/label", label: "Label" },
      { to: "/components/card", label: "Card" },
      { to: "/components/table", label: "Table" },
      { to: "/components/separator", label: "Separator" },
    ],
  },
]
