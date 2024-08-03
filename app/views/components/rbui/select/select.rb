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
          controller: "rbui--select"
        }
      }
    end
  end
end
