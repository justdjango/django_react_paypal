<p align="center">
  <p align="center">
    <a href="https://justdjango.com/?utm_source=github&utm_medium=logo" target="_blank">
      <img src="https://assets.justdjango.com/static/branding/logo.svg" alt="JustDjango" height="72">
    </a>
  </p>
  <p align="center">
    The Definitive Django Learning Platform.
  </p>
</p>

# Django React PayPal Payments

This is a tutorial for integrating PayPal with Django and React.

This project was bootstrapped with [Cookiecutter Django](https://github.com/pydanny/cookiecutter-django).

## Running the Project

**Make sure you add your environment variables**

### Option 1: Docker

You can run the project [with Docker](https://cookiecutter-django.readthedocs.io/en/latest/developing-locally-docker.html):

```bash
docker-compose -f local.yml build
docker-compose -f local.yml up
```

### Option 2: Locally

Install and run everything manually. You will need to create a Postgres database locally as well.

### Django Backend

```bash
virtualenv venv
source venv/bin/activate
pip install -r requirements/local.txt
python manage.py migrate
python manage.py runserver
```

### React Frontend

```bash
npm i
npm run start
```

## For deploying

```bash
npm run build
```

---

<div align="center">

<i>Other places you can find us:</i><br>

<a href="https://www.youtube.com/channel/UCRM1gWNTDx0SHIqUJygD-kQ" target="_blank"><img src="https://img.shields.io/badge/YouTube-%23E4405F.svg?&style=flat-square&logo=youtube&logoColor=white" alt="YouTube"></a>
<a href="https://www.twitter.com/justdjangocode" target="_blank"><img src="https://img.shields.io/badge/Twitter-%231877F2.svg?&style=flat-square&logo=twitter&logoColor=white" alt="Twitter"></a>

</div>
