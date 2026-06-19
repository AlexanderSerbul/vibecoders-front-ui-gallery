import { Route, Routes } from "react-router-dom"

import { Footer } from "@/components/Footer"
import { Navbar } from "@/components/Navbar"
import { Home } from "@/pages/Home"
import { DialogDemo } from "@/pages/demos/DialogDemo"
import { SheetDemo } from "@/pages/demos/SheetDemo"
import { DrawerDemo } from "@/pages/demos/DrawerDemo"
import { MenubarDemo } from "@/pages/demos/MenubarDemo"
import { ContextMenuDemo } from "@/pages/demos/ContextMenuDemo"
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

function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components/dialog" element={<DialogDemo />} />
          <Route path="/components/sheet" element={<SheetDemo />} />
          <Route path="/components/drawer" element={<DrawerDemo />} />
          <Route path="/components/menubar" element={<MenubarDemo />} />
          <Route path="/components/context-menu" element={<ContextMenuDemo />} />
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
          <Route path="/components/input-otp" element={<InputOTPDemo />} />
          <Route path="/components/accordion" element={<AccordionDemo />} />
          <Route path="/components/collapsible" element={<CollapsibleDemo />} />
          <Route path="/components/tabs" element={<TabsDemo />} />
          <Route path="/components/sortable-tabs" element={<SortableTabsDemo />} />
          <Route path="/components/resizable" element={<ResizableDemo />} />
          <Route path="/components/scroll-area" element={<ScrollAreaDemo />} />
          <Route path="/components/data-table" element={<DataTableDemo />} />
          <Route path="/components/chart" element={<ChartDemo />} />
          <Route path="/components/carousel" element={<CarouselDemo />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
