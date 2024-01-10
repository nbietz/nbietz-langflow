from langflow import CustomComponent
from langflow.field_typing import NestedDict
from typing import List, Optional, Dict, Any, Union, Callable
from langchain_openai.embeddings.base import OpenAIEmbeddings


class OpenAIEmbeddingsComponent(CustomComponent):
    display_name = "OpenAIEmbeddings"
    description = "OpenAI embedding models"

    def build_config(self):
        return {
            "allowed_special": {
                "display_name": "Allowed Special",
                "advanced": True,
                "field_type": "str",
                "is_list": True,
            },
            "default_headers": {
                "display_name": "Default Headers",
                "advanced": True,
                "field_type": "dict",
            },
            "default_query": {
                "display_name": "Default Query",
                "advanced": True,
                "field_type": "NestedDict",
            },
            "disallowed_special": {
                "display_name": "Disallowed Special",
                "advanced": True,
                "field_type": "str",
                "is_list": True,
            },
            "chunk_size": {"display_name": "Chunk Size", "advanced": True},
            "client": {"display_name": "Client", "advanced": True},
            "deployment": {"display_name": "Deployment", "advanced": True},
            "embedding_ctx_length": {
                "display_name": "Embedding Context Length",
                "advanced": True,
            },
            "max_retries": {"display_name": "Max Retries", "advanced": True},
            "model": {"display_name": "Model", "advanced": True},
            "model_kwargs": {"display_name": "Model Kwargs", "advanced": True},
            "openai_api_base": {"display_name": "OpenAI API Base","password":True, "advanced": True},
            "openai_api_key": {"display_name": "OpenAI API Key","password":True},
            "openai_api_type": {"display_name": "OpenAI API Type", "advanced": True,"password":True},
            "openai_api_version": {
                "display_name": "OpenAI API Version",
                "advanced": True,
            },
            "openai_organization": {
                "display_name": "OpenAI Organization",
                "advanced": True,
            },
            "openai_proxy": {"display_name": "OpenAI Proxy", "advanced": True},
            "request_timeout": {"display_name": "Request Timeout", "advanced": True},
            "show_progress_bar": {
                "display_name": "Show Progress Bar",
                "advanced": True,
            },
            "skip_empty": {"display_name": "Skip Empty", "advanced": True},
            "tiktoken_model_name": {"display_name": "TikToken Model Name"},
            "tikToken_enable": {"display_name": "TikToken Enable"},
        }

    def build(
        self,
        default_headers: Optional[Dict[str, str]] = None,
        default_query: Optional[NestedDict] = {},
        allowed_special: Optional[List[str]] = [],
        disallowed_special: List[str] = ["all"],
        chunk_size: Optional[int] = 1000,
        client: Optional[Any] = None,
        deployment: str = "text-embedding-ada-002",
        embedding_ctx_length: Optional[int] = 8191,
        max_retries: Optional[int] = 6,
        model: str = "text-embedding-ada-002",
        model_kwargs: NestedDict = {},
        openai_api_base: Optional[str] = None,
        openai_api_key: Optional[str] = "",
        openai_api_type: Optional[str] = None,
        openai_api_version: Optional[str] = None,
        openai_organization: Optional[str] = None,
        openai_proxy: Optional[str] = None,
        request_timeout: Optional[float] = None,
        show_progress_bar: Optional[bool] = False,
        skip_empty: Optional[bool] = False,
        tikToken_enable: Optional[bool] = True,
        tiktoken_model_name: Optional[str] = None,
    ) -> Union[OpenAIEmbeddings, Callable]:
        return OpenAIEmbeddings(
            tiktoken_enabled=tikToken_enable,
            default_headers=default_headers,
            default_query=default_query,
            allowed_special=set(allowed_special),
            disallowed_special=set(disallowed_special),
            chunk_size=chunk_size,
            client=client,
            deployment=deployment,
            embedding_ctx_length=embedding_ctx_length,
            max_retries=max_retries,
            model=model,
            model_kwargs=model_kwargs,
            openai_api_base=openai_api_base,
            openai_api_key=openai_api_key,
            openai_api_type=openai_api_type,
            openai_api_version=openai_api_version,
            openai_organization=openai_organization,
            openai_proxy=openai_proxy,
            request_timeout=request_timeout,
            show_progress_bar=show_progress_bar,
            skip_empty=skip_empty,
            tiktoken_model_name=tiktoken_model_name,
        )
