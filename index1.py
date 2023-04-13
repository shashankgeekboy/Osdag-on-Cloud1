django-admin startproject myproject
cd myproject
python manage.py startapp myapp

pip install djangorestframework


import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_GET
from django.shortcuts import render
from django.conf import settings

@require_GET
@csrf_exempt
def load_cad(request):
    file_path = settings.STATIC_ROOT + '/model.stl'
    with open(file_path, 'r') as file:
        data = file.read()
    response = {
        'status': 'success',
        'data': data,
    }
    return JsonResponse(response)
