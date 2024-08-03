# frozen_string_literal: true

module Phlex
  class Select < ApplicationView
    def view_template
      div(class: "h-screen flex items-center justify-center") do
        div(class: "w-64") do
          Select do
            SelectInput(value: "apple", id: "select-a-fruit")
            SelectTrigger do
              SelectValue(placeholder: "Select a fruit", id: "select-a-fruit") { "Apple" }
            end
            SelectContent(outlet_id: "select-a-fruit") do
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
