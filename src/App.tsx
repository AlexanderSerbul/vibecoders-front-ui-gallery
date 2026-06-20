import { Route, Routes } from "react-router-dom"

import { MainLayout } from "@/components/MainLayout"
import { Toaster } from "@/components/ui/sonner"
import { Home } from "@/pages/Home"
import { AboutProject } from "@/pages/AboutProject"
import { DialogDemo } from "@/pages/demos/DialogDemo"
import { AlertDialogDemo } from "@/pages/demos/AlertDialogDemo"
import { SheetDemo } from "@/pages/demos/SheetDemo"
import { DrawerDemo } from "@/pages/demos/DrawerDemo"
import { MenubarDemo } from "@/pages/demos/MenubarDemo"
import { ContextMenuDemo } from "@/pages/demos/ContextMenuDemo"
import { DropdownMenuDemo } from "@/pages/demos/DropdownMenuDemo"
import { NavigationMenuDemo } from "@/pages/demos/NavigationMenuDemo"
import { PopoverDemo } from "@/pages/demos/PopoverDemo"
import { TooltipDemo } from "@/pages/demos/TooltipDemo"
import { HoverCardDemo } from "@/pages/demos/HoverCardDemo"
import { CommandDemo } from "@/pages/demos/CommandDemo"
import { SelectDemo } from "@/pages/demos/SelectDemo"
import { ComboboxDemo } from "@/pages/demos/ComboboxDemo"
import { FormDemo } from "@/pages/demos/FormDemo"
import { CalendarDemo } from "@/pages/demos/CalendarDemo"
import { DatePickerDemo } from "@/pages/demos/DatePickerDemo"
import { SliderDemo } from "@/pages/demos/SliderDemo"
import { SwitchDemo } from "@/pages/demos/SwitchDemo"
import { CheckboxDemo } from "@/pages/demos/CheckboxDemo"
import { RadioGroupDemo } from "@/pages/demos/RadioGroupDemo"
import { ToggleDemo } from "@/pages/demos/ToggleDemo"
import { ToggleGroupDemo } from "@/pages/demos/ToggleGroupDemo"
import { InputOTPDemo } from "@/pages/demos/InputOTPDemo"
import { AccordionDemo } from "@/pages/demos/AccordionDemo"
import { CollapsibleDemo } from "@/pages/demos/CollapsibleDemo"
import { TabsDemo } from "@/pages/demos/TabsDemo"
import { SortableTabsDemo } from "@/pages/demos/SortableTabsDemo"
import { ResizableDemo } from "@/pages/demos/ResizableDemo"
import { ScrollAreaDemo } from "@/pages/demos/ScrollAreaDemo"
import { DataTableDemo } from "@/pages/demos/DataTableDemo"
import { ChartDemo } from "@/pages/demos/ChartDemo"
import { CarouselDemo } from "@/pages/demos/CarouselDemo"
import { AvatarDemo } from "@/pages/demos/AvatarDemo"
import { PaginationDemo } from "@/pages/demos/PaginationDemo"
import { ProgressDemo } from "@/pages/demos/ProgressDemo"
import { BreadcrumbDemo } from "@/pages/demos/BreadcrumbDemo"
import { AlertDemo } from "@/pages/demos/AlertDemo"
import { TextareaDemo } from "@/pages/demos/TextareaDemo"
import { BadgeDemo } from "@/pages/demos/BadgeDemo"
import { SkeletonDemo } from "@/pages/demos/SkeletonDemo"
import { AspectRatioDemo } from "@/pages/demos/AspectRatioDemo"
import { ButtonDemo } from "@/pages/demos/ButtonDemo"
import { InputDemo } from "@/pages/demos/InputDemo"
import { LabelDemo } from "@/pages/demos/LabelDemo"
import { CardDemo } from "@/pages/demos/CardDemo"
import { TableDemo } from "@/pages/demos/TableDemo"
import { SeparatorDemo } from "@/pages/demos/SeparatorDemo"
import { ToastDemo } from "@/pages/demos/ToastDemo"
import { SidebarDemo } from "@/pages/demos/SidebarDemo"

function App() {
  return (
    <>
      <Routes>
        {/* Gallery routes share the navbar + footer chrome. */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutProject />} />
          <Route path="/components/dialog" element={<DialogDemo />} />
          <Route
            path="/components/alert-dialog"
            element={<AlertDialogDemo />}
          />
          <Route path="/components/sheet" element={<SheetDemo />} />
          <Route path="/components/drawer" element={<DrawerDemo />} />
          <Route path="/components/menubar" element={<MenubarDemo />} />
          <Route path="/components/context-menu" element={<ContextMenuDemo />} />
          <Route
            path="/components/dropdown-menu"
            element={<DropdownMenuDemo />}
          />
          <Route
            path="/components/navigation-menu"
            element={<NavigationMenuDemo />}
          />
          <Route path="/components/popover" element={<PopoverDemo />} />
          <Route path="/components/tooltip" element={<TooltipDemo />} />
          <Route path="/components/hover-card" element={<HoverCardDemo />} />
          <Route path="/components/command" element={<CommandDemo />} />
          <Route path="/components/select" element={<SelectDemo />} />
          <Route path="/components/combobox" element={<ComboboxDemo />} />
          <Route path="/components/form" element={<FormDemo />} />
          <Route path="/components/calendar" element={<CalendarDemo />} />
          <Route path="/components/date-picker" element={<DatePickerDemo />} />
          <Route path="/components/slider" element={<SliderDemo />} />
          <Route path="/components/switch" element={<SwitchDemo />} />
          <Route path="/components/checkbox" element={<CheckboxDemo />} />
          <Route path="/components/radio-group" element={<RadioGroupDemo />} />
          <Route path="/components/toggle" element={<ToggleDemo />} />
          <Route
            path="/components/toggle-group"
            element={<ToggleGroupDemo />}
          />
          <Route path="/components/input-otp" element={<InputOTPDemo />} />
          <Route path="/components/textarea" element={<TextareaDemo />} />
          <Route path="/components/accordion" element={<AccordionDemo />} />
          <Route path="/components/collapsible" element={<CollapsibleDemo />} />
          <Route
            path="/components/sortable-tabs"
            element={<SortableTabsDemo />}
          />
          <Route path="/components/tabs" element={<TabsDemo />} />
          <Route path="/components/resizable" element={<ResizableDemo />} />
          <Route path="/components/scroll-area" element={<ScrollAreaDemo />} />
          <Route path="/components/data-table" element={<DataTableDemo />} />
          <Route path="/components/chart" element={<ChartDemo />} />
          <Route path="/components/carousel" element={<CarouselDemo />} />
          <Route path="/components/avatar" element={<AvatarDemo />} />
          <Route path="/components/pagination" element={<PaginationDemo />} />
          <Route path="/components/progress" element={<ProgressDemo />} />
          <Route path="/components/breadcrumb" element={<BreadcrumbDemo />} />
          <Route path="/components/alert" element={<AlertDemo />} />
          <Route path="/components/badge" element={<BadgeDemo />} />
          <Route path="/components/skeleton" element={<SkeletonDemo />} />
          <Route
            path="/components/aspect-ratio"
            element={<AspectRatioDemo />}
          />
          <Route path="/components/button" element={<ButtonDemo />} />
          <Route path="/components/input" element={<InputDemo />} />
          <Route path="/components/label" element={<LabelDemo />} />
          <Route path="/components/card" element={<CardDemo />} />
          <Route path="/components/table" element={<TableDemo />} />
          <Route path="/components/separator" element={<SeparatorDemo />} />
          <Route path="/components/toast" element={<ToastDemo />} />
        </Route>

        {/* Sidebar is a full-page layout component, so it gets its own shell. */}
        <Route path="/components/sidebar" element={<SidebarDemo />} />
      </Routes>
      <Toaster richColors />
    </>
  )
}

export default App
