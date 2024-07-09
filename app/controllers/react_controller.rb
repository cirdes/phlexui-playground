# frozen_string_literal: true

class ReactController < ApplicationController
  after_action -> { request.session_options[:skip] = true }
  def show; end
end
