from django.db import models

# Create your models here.

class Calculadora(models.Model):
    num1 = models.IntegerField()
    num2 = models.IntegerField()
    
