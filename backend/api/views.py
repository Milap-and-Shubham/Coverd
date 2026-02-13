from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import *
from .models import *
from rest_framework.permissions import AllowAny, IsAuthenticated
from requests import Request, post
from django.conf import settings
from django.shortcuts import redirect
from urllib.parse import urlencode
# Create your views here.

SPOTIFY_AUTH_URL = "https://accounts.spotify.com/authorize"
SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token"
SPOTIFY_API_BASE_URL = "https://api.spotify.com/v1"

class TestView(APIView):
    def get(self, request, format=None):
        return Response({'hey':'this is a test'}, status=status.HTTP_200_OK)

class SpotifyLoginView(APIView):
    """
    Creates a GET request that redirects the user to Spotify's authorisation
    page, where they need to log into their account which starts the OAuth
    process.
    """

    def get(self, request):
        spotify_login_query = {
            "client_id": settings.CLIENT_ID,
            "response_type": "code",
            "redirect_uri": settings.REDIRECT_URI,
        }

        url = Request(
            "GET",
            SPOTIFY_AUTH_URL,
            params=spotify_login_query,
        ).prepare().url

        return redirect(url)


class SpotifyCallbackView(APIView):
    """
    Once the user successfully logs into their spotify account, a POST request
    is made to exchange the code for tokens (access and refresh), then the OAuth
    process is completed and the user gets redirected back to the app website.
    
    If any errors occur, the user is redirected back to app website with error
    info in the redirect url.
    """
    
    def get(self, request):
        code = request.GET.get("code")
        error = request.GET.get("error")

        if error:
            params = urlencode({"error": error})
            return redirect(f"{settings.FRONTEND_REDIRECT_URI}?{params}")

        if not code:
            params = urlencode({"error": "missing_code"})
            return redirect(f"{settings.FRONTEND_REDIRECT_URI}?{params}")

        spotify_login_query = {
            "client_id": settings.CLIENT_ID,
            "response_type": "code",
            "redirect_uri": settings.REDIRECT_URI,
            "grant_type": "authorization_code",
            "code": code,
            "client_secret": settings.SPOTIFY_CLIENT_SECRET,
        }

        response = post(SPOTIFY_TOKEN_URL, spotify_login_query).json()

        access_token = response.get("access_token")
        refresh_token = response.get("refresh_token")
        token_type = response.get("token_type")
        token_expires_in = response.get("expires_in")
        error = response.get("error")
        print(access_token, '\n', refresh_token)
        if error:
            params = urlencode({"error": error})
            return redirect(f"{settings.FRONTEND_REDIRECT_URI}?{params}")

        return redirect(settings.FRONTEND_REDIRECT_URI)