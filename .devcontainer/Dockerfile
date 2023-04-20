FROM ruby:3.2-bullseye

COPY Gemfile .
RUN gem install jekyll bundler && bundle install

EXPOSE 4000
