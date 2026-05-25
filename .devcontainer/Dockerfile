FROM ruby:3.2-bullseye

RUN apt-get update -y && apt-get install -y --no-install-recommends \
    imagemagick \
    jupyter-nbconvert && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

ENV JEKYLL_ENV=development

RUN mkdir /srv/jekyll
WORKDIR /srv/jekyll

ADD Gemfile Gemfile.lock /srv/jekyll/
RUN bundle install

EXPOSE 4000

CMD ["bundle", "exec", "jekyll", "serve", "--drafts", "--watch", "--host=0.0.0.0"]
