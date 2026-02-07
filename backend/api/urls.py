from django.urls import path
from .views import *
#from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('test/', TestView.as_view()),
    #path('token/', TokenObtainPairView.as_view(), name='get_token'),
    #path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('login/', SpotifyLoginView.as_view(), name='spotify-login'),
    path('callback/', SpotifyCallbackView.as_view(), name='spotify-callback'),
]