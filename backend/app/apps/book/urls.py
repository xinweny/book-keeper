from rest_framework import routers

from app.apps.book.views import BookViewSet

book_router = routers.DefaultRouter()
book_router.register(r'books', BookViewSet)