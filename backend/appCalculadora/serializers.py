from rest_framework import serializers

from .models import *

class SomaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Calculadora
        fields = '__all__'