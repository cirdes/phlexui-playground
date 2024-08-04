# frozen_string_literal: true

module Phlex
  class Select < ApplicationView
    def view_template
      div(class: "h-screen flex items-center justify-center") do
        div(class: "w-96") do
          Select do
            SelectInput()
            SelectTrigger do
              SelectValue(placeholder: "Select a fruit")
            end
            SelectContent() do
              SelectGroup do
                SelectLabel { "Fruits" }
                SelectItem(value: "apple") { "Apple" }
                SelectItem(value: "orange") { "Orange" }
                SelectItem(value: "banana") { "Banana" }
                SelectItem(value: "watermelon") { "Watermelon" }
              end
            end
          end
        end
      end
    end
  end
end
