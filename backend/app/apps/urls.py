from rest_framework import routers

from app.apps.book.urls import book_router

router = routers.DefaultRouter()

router.registry.extend(book_router.registry)