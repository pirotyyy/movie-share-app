from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.exceptions import ParseError
from .serializers import MyTokenObtainPairSerializer

class MyTokenObtainPairView(TokenObtainPairView):
  serializer_class = MyTokenObtainPairSerializer
