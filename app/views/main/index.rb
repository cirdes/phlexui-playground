# frozen_string_literal: true

module Main
  class Index < ApplicationView
    def view_template
      div(class: "p-8") do
        h1(class: "mb-6 text-xl font-bold text-gray-900 dark:text-white") { "PhlexUI components playground" }

        div(class: "flex flex-col gap-4") do
          div do
            h2(class: "mb-2 text-lg font-semibold text-gray-900 dark:text-white") { "Powered by Phlex" }

            ul(class: "max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400") do
              li { a(href: "/phlex/combobox", class: "font-medium text-blue-600 dark:text-blue-500 hover:underline") { "Combobox" } }
              li { a(href: "/phlex/tooltip", class: "font-medium text-blue-600 dark:text-blue-500 hover:underline") { "Tooltip" } }
            end
          end

          div do
            h2(class: "mb-2 text-lg font-semibold text-gray-900 dark:text-white") { "Powered by Shadcn" }

            ul(class: "max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400") do
              li { a(href: "/shadcn/combobox", class: "font-medium text-blue-600 dark:text-blue-500 hover:underline") { "Combobox" } }
              li { a(href: "/shadcn/tooltip", class: "font-medium text-blue-600 dark:text-blue-500 hover:underline") { "Tooltip" } }
            end
          end
        end
      end
    end
  end
end
