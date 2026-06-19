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
    description: "Окна поверх страницы: модальные диалоги и выезжающие панели.",
    items: [
      { to: "/components/dialog", label: "Dialog" },
      { to: "/components/sheet", label: "Sheet" },
      { to: "/components/drawer", label: "Drawer" },
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
    description: "Списки команд и действий: строка меню, контекст и палитра.",
    items: [
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
      { to: "/components/carousel", label: "Carousel" },
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
    ],
  },
  {
    label: "Контролы",
    description: "Числовой ввод и формы с валидацией.",
    items: [
      { to: "/components/slider", label: "Slider" },
      { to: "/components/form", label: "Form" },
      { to: "/components/input-otp", label: "Input OTP" },
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
]
