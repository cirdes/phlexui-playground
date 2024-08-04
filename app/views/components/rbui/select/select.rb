# frozen_string_literal: true

module RBUI
  class Select < Base
    def view_template(&)
      div(**attrs, &)
    end

    private

    def default_attrs
      {
        data: {
          controller: "rbui--select",
          rbui__select_open_value: "false",
          action: "click@window->rbui--select#clickOutside"
        },
        class: "w-full relative"
      }
    end
  end
end
