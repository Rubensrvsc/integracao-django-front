from django.shortcuts import render

from rest_framework import viewsets

from .models import Calculadora
from .serializers import SomaSerializer

# Create your views here.

class CalculadoraViewSet(viewsets.ModelViewSet):

    serializer_class = SomaSerializer
    queryset = Calculadora.objects.all()
